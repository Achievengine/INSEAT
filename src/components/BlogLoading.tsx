type BlogLoadingProps = {
  variant?: 'list' | 'post';
  message?: string;
};

const BlogLoading = ({ variant = 'list', message = 'Loading the latest posts...' }: BlogLoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16" aria-live="polite">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-25 blur-lg animate-pulse"></div>
        <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
        <div className="absolute inset-3 rounded-full bg-white shadow-md flex items-center justify-center">
          <span className="text-primary font-bold">IN</span>
        </div>
      </div>
      <div className="text-gray-500 font-medium text-center">{message}</div>

      {variant === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-100 animate-pulse"></div>
              <div className="p-6 space-y-3">
                <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse"></div>
                <div className="pt-4 border-t border-gray-100 flex justify-between">
                  <div className="h-3 w-24 bg-gray-100 rounded animate-pulse"></div>
                  <div className="h-3 w-20 bg-gray-100 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-16 space-y-6">
            <div className="h-6 w-32 bg-gray-100 rounded-full animate-pulse"></div>
            <div className="h-10 w-3/4 bg-gray-100 rounded animate-pulse"></div>
            <div className="h-4 w-1/2 bg-gray-100 rounded animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div>
              <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogLoading;
