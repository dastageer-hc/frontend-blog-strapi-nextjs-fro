export default function Loading() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="h-8 w-48 b dark:bg-gray-700 rounded animate-pulse mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className=" dark:bg-gray-800 rounded-lg shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="h-6 w-3/4  dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                <div className="h-4 w-1/2  dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-1/4  dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
