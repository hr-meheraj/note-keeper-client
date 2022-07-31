import React from 'react'
import Skeleton from '@mui/material/Skeleton';

function DataLoading() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mb-[30px]'>
            {
                [1, 2, 3, 4, 5, 6].map(each => {
                    return (
                        <div key={each} className='dark:bg-[#171c25] bg-[#132333] rounded-md shadow-md p-4 '>
                            <div className='text-6xl'>
                                <Skeleton sx={{ bgcolor: '#ffffff2b' }} />
                            </div>
                            <div className='flex gap-[10px] justify-center'>
                                <Skeleton width="49%" sx={{ bgcolor: '#ffffff2b' }} />
                                <Skeleton width="49%" sx={{ bgcolor: '#ffffff2b' }} />
                            </div>
                            <br />
                            <div className=''>
                                <Skeleton sx={{ bgcolor: '#ffffff2b' }} />
                                <Skeleton sx={{ bgcolor: '#ffffff2b' }} />
                                <Skeleton sx={{ bgcolor: '#ffffff2b' }} />
                                <Skeleton sx={{ bgcolor: '#ffffff2b' }} />
                                <Skeleton sx={{ bgcolor: '#ffffff2b' }} />
                                <Skeleton sx={{ bgcolor: '#ffffff2b' }} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataLoading