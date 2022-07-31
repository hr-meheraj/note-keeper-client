import axios from 'axios'
import React, { useState } from 'react'
import { AiFillPushpin } from 'react-icons/ai'
import { BsTrashFill, BsCheck2All, BsFillEyeFill } from 'react-icons/bs'
import { TbPinnedOff } from 'react-icons/tb'
import { toast } from 'react-toastify'
import ViewNote from './ViewNote'
import { FiEdit } from 'react-icons/fi'
import EditNote from './EditNote'

function Note({ note, refetch }) {
    const [viewNoteData, setViewNoteData] = useState(null);
    const [editNote, setEditNote] = useState(null);
    const handleDelete = async () => {
        const response = await axios.delete(`http://localhost:5000/note/${note._id}`);
        if (response.status === 200) {
            refetch();
            toast.success("Successfully Deleted");
        } else {
            toast.error("Something went wrong");
        }
    }

    const handleAddtoPin = async () => {
        const response = await axios.put(`http://localhost:5000/note/${note._id}`, { pinned: true });
        if (response.status === 200) {
            toast.success(`${note.title.slice(0, 60)}... is added to pin`);
            refetch();
        } else {
            toast.error("Someting went wrong to pinned item");
            console.log(response);
        }
    }

    const handleRemotetoPinned = async () => {
        const response = await axios.put(`http://localhost:5000/note/${note._id}`, { pinned: false });
        if (response.status === 200) {
            toast.success("Item is removed from pinned");
            refetch();
        } else {
            toast.error("Someting went wrong to unpinned items");
        }
    }
    return (
        <div className='shadow-md rounded-md p-4 dark:bg-[#171c25]'>
            <h3 className="text-2xl mb-3 dark:text-[#6c6c72]">{note.title}</h3>
            <div className='flex gap-[5px] wrap'>

                {
                    note.category?.map(category => {
                        return (
                            <div class="badge badge-success gap-2">
                                <img src='https://img.icons8.com/external-tal-revivo-green-tal-revivo/344/external-category-emails-bundle-email-green-tal-revivo.png' className='w-8 h-8 border-3 rounded-full ' />
                                {category}
                            </div>
                        )
                    })
                }
            </div>
            <p className='mt-2 dark:text-[#505057]'>
                {(note?.details?.length >= 400) ? (<span>
                    {note?.details?.slice(0, 400)}...<label onClick={() => setViewNoteData(note)} for='viewNote' className='btn btn-xs bg-green-600 cursor-pointer border-none outline-none'>See More</label>
                </span>) : note?.details}
            </p>
            <hr className='h-[2px] my-2 bg-gray-300' />
            <div className='flex gap-4 py-2'>
                <span className='text-2xl text-red-500 bg-gray-800 hover:bg-gray-900 hover:scale-[1.07] transition-all p-2 cursor-pointer rounded-full' onClick={handleDelete}><BsTrashFill /></span>
                {
                    !note?.pinned ? <span className='text-2xl text-green-500 bg-gray-800 hover:scale-[1.07] p-2 cursor-pointer rounded-full' onClick={handleAddtoPin}><AiFillPushpin /></span> : <span className='text-2xl text-green-500 bg-gray-800 hover:scale-[1.07] p-2 cursor-pointer rounded-full' onClick={handleRemotetoPinned}><TbPinnedOff /></span>
                }
                <label for="viewNote" className='text-2xl text-white  bg-gray-800 hover:bg-gray-900  hover:scale-[1.07] transition-all p-2 cursor-pointer rounded-full' onClick={() => setViewNoteData(note)}><BsFillEyeFill /></label>
                <label for='editNote' className='text-2xl text-red-500 bg-gray-800 hover:bg-gray-900 hover:scale-[1.07] transition-all p-2 cursor-pointer rounded-full' onClick={() => setEditNote(note)}><FiEdit /></label>
               {
                note?.completed &&  <span className='text-2xl text-green-600 bg-gray-800 hover:bg-gray-900 hover:scale-[1.07] transition-all p-2 cursor-pointer rounded-full'><BsCheck2All /></span>
               }
            </div>
            {viewNoteData && <ViewNote setViewNoteData={setViewNoteData} refetch={refetch} viewNoteData={viewNoteData} />}
            {editNote && <EditNote editNote={editNote} refetch={refetch} setEditNote={setEditNote} />}
        </div>
    )
}

export default Note