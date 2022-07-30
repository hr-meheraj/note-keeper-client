import React from 'react'

function TopBar({setNote}) {
    return (
        <div className='flex justify-between mt-[40px]  items-center'>
            <div>
                <h2 className='text-2xl dark:text-white'>Your Notes</h2>
            </div>
            <div>
                <label for="addNote" class="btn btn-sm modal-button" onClick={() => setNote(true)}>Add New Note </label>
            </div>
        </div>
    )
}

export default TopBar