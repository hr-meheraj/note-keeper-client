import React from 'react'

function Note({ note }) {
    return (
        <div className='shadow-md rounded-md p-4 dark:bg-[#171c25]'>
            <h3 className="text-2xl mb-3 dark:text-[#6c6c72]">{note.title}</h3>
            <div className='flex gap-[5px] wrap'>

            {
                note.category?.map(category => {
                    return(
                        <div class="badge badge-success gap-2">
                        <img src='https://img.icons8.com/external-tal-revivo-green-tal-revivo/344/external-category-emails-bundle-email-green-tal-revivo.png' className='w-8 h-8 border-3 rounded-full '/>
                        {category}
                    </div>
                    )
                })
            }
            </div>
            <p className='mt-2 dark:text-[#505057]'>
                {(note?.details?.length >= 300) ? (<span>
                    {note?.details?.slice(0,300)}...<button className='btn btn-xs bg-green-600 cursor-pointer border-none outline-none'>See More</button>
                </span>): note?.details }
            </p>
        </div>
    )
}

export default Note