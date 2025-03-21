import { Skeleton } from '@mui/material'; // or your preferred skeleton library
import React from 'react';

export default function PostSkeletons() {
  return (
    <div className="divide-y pl-20 divide-gray-700">
      {/* Post 1 */}
      <div className="flex  gap-4 p-4">
        <Skeleton
          variant="circular"
          width={100}
          height={100}
          sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
        />
        <div className="flex-1 space-y-2">
          <Skeleton
            variant="rectangular"
            width={600}
            height={100}
            sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
          />
          <Skeleton
            variant="rounded"
            width={500}
            height={60}
            sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
          />
          <div className="flex gap-4">
            <Skeleton
              variant="text"
              width={100}
              height={30}
              animation="wave"
              sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
            />
             <Skeleton
              variant="text"
              width={100}
              height={30}
              animation="wave"
              sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
            />
          </div>
        </div>
      </div>

      {/* Post 2 */}
      <div className="flex gap-4 p-4">
        <Skeleton
          variant="circular"
          width={100}
          height={100}
          sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
        />
        <div className="flex-1 space-y-2">
          <Skeleton
            variant="rectangular"
            width={600}
            height={100}
            sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
          />
          <Skeleton
            variant="rounded"
            width={500}
            height={60}
            sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
          />
          <div className="flex gap-4">
            <Skeleton
              variant="text"
              width={100}
              height={30}
              animation="wave"
              sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
            />
             <Skeleton
              variant="text"
              width={100}
              height={30}
              animation="wave"
              sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
            />
          </div>
        </div>
      </div>  <div className="flex  gap-4 p-4">
        <Skeleton
          variant="circular"
          width={100}
          height={100}
          sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
        />
        <div className="flex-1 space-y-2">
          <Skeleton
            variant="rectangular"
            width={600}
            height={100}
            sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
          />
          <Skeleton
            variant="rounded"
            width={500}
            height={60}
            sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
          />
          <div className="flex gap-4">
            <Skeleton
              variant="text"
              width={100}
              height={30}
              animation="wave"
              sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
            />
             <Skeleton
              variant="text"
              width={100}
              height={30}
              animation="wave"
              sx={{ bgcolor: 'rgb(38 38 38)' }} // gray-800
            />
          </div>
        </div>
      </div>
    </div>
  );
}