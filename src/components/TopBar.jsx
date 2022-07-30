import React from 'react'

function TopBar() {
  return (
    <div className='flex justify-between mt-[40px] px-[40px] items-center'>
        <div>
            <h2 className='text-2xl dark:text-white'>Your Notes</h2>
        </div>
        <div>
            <button className='btn btn-sm'>Add New Note</button>
        </div>
    </div>
  )
}

export default TopBar