import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify'
function EditNote({ editNote, setEditNote, refetch }) {
    const handleEditNoteSubmit = async (e) => {
        e.preventDefault();
        const category = e.target.category.value;
        const splitCategory = category.split(",");

        const editedNote = {
            title: e.target.title.value,
            category: splitCategory,
            details: e.target.details.value
        }

        const response = await axios.put(`https://hr-meheraj-note-keeper.herokuapp.com/note/${editNote._id}`, editedNote);
        console.log(response);
        if (response.status === 200) {
            toast.success("Successfully Note Updated");
            refetch();
            setEditNote(null);
        } else {
            toast.error("Someting went wrong to Update Note");
            refetch();
            setEditNote(null);
        }
    }

    return (
        <div>
            <input type="checkbox" id="editNote" class="modal-toggle" />
            <div class="modal">
                <form class="modal-box dark:bg-[#111] dark:text-white text-normal" onSubmit={handleEditNoteSubmit}>
                    <input spellCheck={false} name='title' required className='add-note-title' defaultValue={editNote.title} />
                    <input spellCheck={false} name='category' required className='add-note-category' defaultValue={editNote.category} />
                    <textarea spellCheck={false} name='details' required className='add-note-textarea leading-normal dark:text-[#ffffff70] text-black text-[16px] ' style={{ fontWeight: 300 }} defaultValue={editNote.details}></textarea>
                    {
                        editNote.title && <button type='submit' class="btn w-full bg-green-500 hover:bg-green-800 mt-[20px]">Update!</button>
                    }
                    {
                        // !editNote.title && <label for='editNote' className='btn w-full bg-green-500 hover:bg-green-800' onClick={() => setEditNote("")}>Please Try Again</label>
                    }
                </form>
            </div>
        </div >
    )
}

export default EditNote