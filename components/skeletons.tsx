import React from 'react';

export const GridSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Header row */}
      <div className="grid grid-cols-5 gap-4 p-3 border-b bg-gray-50">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-6 bg-gray-200 rounded"></div>
        ))}
      </div>

      {/* Data rows */}
      {[...Array(8)].map((_, idx) => (
        <div key={idx} className="grid grid-cols-5 gap-4 p-4 border-b items-center">
          {/* Employee image */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>

          {/* Other columns */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
      ))}
    </div>
  );
};
