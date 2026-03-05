import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '../../services/blogService';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BlogLoading from '../../components/BlogLoading';
import SEOHead from '../../components/SEOHead';

const getTextSnippet = (html: string, maxLength = 160) => {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, maxLength);
};

export default function BlogPost() {
    const { slug } = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            getBlogBySlug(slug).then(res => {
                if (res.success) setBlog(res.data);
                setLoading(false);
            });
        }
    }, [slug]);

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://inseat.achievengine.com';
    const canonicalUrl = `${origin}/blog/${slug || ''}`;
    const previewImage = new URL('/preview.png', origin).toString();
    const description = blog?.summary || getTextSnippet(blog?.content || '') || 'Read the latest insights and updates from Inseat.';
    const image = blog?.coverImageUrl || previewImage;

    if (loading) return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow pt-20 container-custom">
                <BlogLoading variant="post" message="Loading this story..." />
            </div>
            <Footer />
        </div>
    );

    if (!blog) return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                    <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
                </div>
            </div>
            <Footer />
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <SEOHead
                title={blog ? blog.title : 'Blog Post'}
                description={description}
                url={canonicalUrl}
                image={image}
                type="article"
                extraJsonLd={blog ? [
                    {
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: blog.title,
                        description,
                        image: blog.coverImageUrl ? [blog.coverImageUrl] : undefined,
                        datePublished: blog.publishedAt,
                        author: {
                            '@type': 'Person',
                            name: blog.authorName || 'Inseat'
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'Inseat',
                            logo: {
                                '@type': 'ImageObject',
                                url: new URL('/logo.png', origin).toString()
                            }
                        },
                        mainEntityOfPage: canonicalUrl
                    }
                ] : undefined}
            />
            <Navbar />
            <article className="flex-grow">
                {/* Header */}
                <div className="bg-secondary text-white py-20 md:py-32 relative overflow-hidden mt-16">
                    {blog.coverImageUrl && (
                        <div className="absolute inset-0 opacity-20">
                            <img src={blog.coverImageUrl} className="w-full h-full object-cover" alt={blog.title} />
                        </div>
                    )}
                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {(blog.tags || []).map((t: any) => (
                                <span key={t._id} className="text-xs font-bold bg-primary text-white px-3 py-1 rounded-full uppercase tracking-wider">{t.name}</span>
                                ))}
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{blog.title}</h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base opacity-90">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    {new Date(blog.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    {blog.authorName || 'Inseat'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container-custom py-12 md:py-16">
                    <div className="max-w-4xl mb-6">
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                            Published on {new Date(blog.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                    <div className="max-w-4xl">
                        <div
                            className="prose prose-lg max-w-none text-gray-700 prose-headings:text-secondary prose-a:text-primary prose-img:rounded-xl"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        ></div>
                    </div>

                    <div className="mt-12 max-w-4xl">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-secondary hover:text-primary font-semibold transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
