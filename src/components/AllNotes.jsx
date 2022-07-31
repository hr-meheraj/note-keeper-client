import React, { useState } from 'react'
import Note from './Note';
import DataLoading from './DataLoading';

export default function AllNotes({ isLoading, error, data, refetch }) {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    const [pinend, setPinned] = useState([]);


    if (isLoading) {
        return (
            <DataLoading />
        )
    }
    if (error) {
        console.log("inside", error);
    }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mb-[30px]'>
                {
                    data?.filter(e => e.pinned === true)?.map(note => <Note refetch={refetch} note={note} key={note?.id} />)
                }
                {
                    data?.filter(e => !e.pinned)?.map(note => <Note refetch={refetch} note={note} key={note?.id} />)
                }
            </div>
            {/* 
            <h2 className='text-xl font-bold my-3 text-gray-400'>Others</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mb-[30px]'>
            </div> */}
        </>
    )
}
