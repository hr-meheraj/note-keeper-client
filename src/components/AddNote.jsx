import React from 'react'
import { v4 as uuidv4 } from 'uuid';
function AddNote({setNote}) {
    const handleAddNote = async e => {
        e.preventDefault();
        const category = e.target.category?.value;
        const newCategoryArray = category.split(",");
        const newNote = await {
            title: e.target.title?.value,
            category: newCategoryArray,
            details: e.target.details.value,
            id : uuidv4(),
            date : new Date().toLocaleDateString(),
            time : new Date().toLocaleTimeString()
        }

        const previousStorage = JSON.parse(localStorage.getItem('all-notes'));
        if(previousStorage){
            localStorage.setItem('all-notes', JSON.stringify([...previousStorage, newNote]))
            e.target.reset();
        }else{
            localStorage.setItem('all-notes', JSON.stringify([newNote]));
            e.target.reset();
        }

        setNote(false);
    }
    return (
        <>
            <input type="checkbox" id="addNote" class="modal-toggle" />
            <div class="modal dark:bg-[#00000acf]">
                <div class="modal-box dark:text-white  dark:bg-[#212730] relative">
                    <form onSubmit={handleAddNote}>
                        <label for="addNote" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <input required name='title' type="text" placeholder="Add Note Title" class="add-note-title" />
                        <input  name='category' type="text" placeholder="Category, for more category use comma" class="add-note-category" />
                        <textarea required name='details' class="add-note-textarea" placeholder="your note details" style={{ fontWeight: 300 }}></textarea>
                         <button  type='submit' className='w-full block btn dark:bg-green-600 dark:hover:bg-green-800  mt-[20px]'>Add Note</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNote