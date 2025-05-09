export default function Loading() {
  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </article>
    </div>
  );
}
