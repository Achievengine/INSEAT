import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getBlogs, getTags } from '../../services/blogService';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BlogLoading from '../../components/BlogLoading';
import SEOHead from '../../components/SEOHead';

export default function BlogList() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [tags, setTags] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag');

    useEffect(() => {
        let isActive = true;
        setIsLoading(true);

        Promise.all([getBlogs({ tag: tag || undefined }), getTags()]).then(([blogsRes, tagsRes]) => {
            if (!isActive) return;
            if (blogsRes.success) setBlogs(blogsRes.data);
            else setBlogs([]);
            if (tagsRes.success) setTags(tagsRes.data);
            else setTags([]);
        }).finally(() => {
            if (isActive) setIsLoading(false);
        });

        return () => {
            isActive = false;
        };
    }, [tag]);

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://inseat.achievengine.com';
    const blogUrl = `${origin}/blog${tag ? `?tag=${encodeURIComponent(tag)}` : ''}`;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <SEOHead
                title={tag ? `Inseat Blog: ${tag}` : 'Inseat Blog'}
                description="Insights, product updates, and restaurant growth tips from the Inseat team."
                url={blogUrl}
                type="website"
                extraJsonLd={[
                    {
                        '@context': 'https://schema.org',
                        '@type': 'Blog',
                        name: 'Inseat Blog',
                        url: blogUrl,
                        blogPost: blogs.map((blog) => ({
                            '@type': 'BlogPosting',
                            headline: blog.title,
                            datePublished: blog.publishedAt,
                            url: `${origin}/blog/${blog.slug}`,
                            author: {
                                '@type': 'Person',
                                name: blog.authorName || 'Inseat'
                            }
                        }))
                    }
                ]}
            />
            <Navbar />
            <div className="container-custom py-20 flex-grow pt-32">
                <h1 className="text-4xl font-bold mb-8 text-center text-secondary">Inseat Blog</h1>

                {/* Tags Filter */}
                <div className="flex flex-wrap gap-2 justify-center mb-10">
                    <Link to="/blog" className={`px-4 py-2 rounded-full transition-colors ${!tag ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>All</Link>
                    {tags.map(t => (
                        <Link key={t._id} to={`/blog?tag=${t.slug}`} className={`px-4 py-2 rounded-full transition-colors ${tag === t.slug ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                            {t.name}
                        </Link>
                    ))}
                </div>

                {/* Blog Grid */}
                {isLoading ? (
                    <BlogLoading />
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map(blog => (
                                <Link key={blog._id} to={`/blog/${blog.slug}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group flex flex-col h-full">
                                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                                        {blog.coverImageUrl ? (
                                            <img src={blog.coverImageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                                                <span className="text-4xl opacity-20">No Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {blog.tags && blog.tags.map((t: any) => (
                                                <span key={t._id} className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">{t.name}</span>
                                            ))}
                                        </div>
                                        <h2 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{blog.title}</h2>
                                        <div className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow" dangerouslySetInnerHTML={{ __html: blog.summary || blog.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' }}></div>

                                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                                            <span>{new Date(blog.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                            <span>{blog.authorName || 'Inseat'}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {blogs.length === 0 && <div className="text-center py-20 text-gray-500 bg-white rounded-xl shadow-sm">No posts found.</div>}
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}
