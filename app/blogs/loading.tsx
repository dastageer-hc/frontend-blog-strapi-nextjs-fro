export default function Loading() {
  return (
    <div className='p-6'>
      <div className='h-8 w-48 bg-gray-200 rounded animate-pulse mb-6'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className='border p-4 rounded-lg'>
            <div className='h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2'></div>
            <div className='h-4 w-full bg-gray-200 rounded animate-pulse'></div>
          </div>
        ))}
      </div>
    </div>
  );
}
