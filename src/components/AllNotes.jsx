import React, { useState } from 'react'
import Note from './Note';

export default function AllNotes() {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    const allNotes = JSON.parse(localStorage.getItem("all-notes"));
    // if (allNotes) {
    //     const totalNotes = allNotes.length;
    //     setPage(Math.round((totalNotes / size)* size));
    // }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mb-[30px]'>
                {
                    allNotes && allNotes?.slice(0, 6).map(note => React.memo(() => <Note note={note} key={note?.id} />))
                }
            </div>
        </>
    )
}
