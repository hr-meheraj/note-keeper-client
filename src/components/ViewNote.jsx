import React from 'react'

function ViewNote({viewNoteData, setViewNoteData}) {

    return (
        <div>
            <input type="checkbox" id="viewNote" class="modal-toggle" />
            <label for='viewNote' class="modal dark:bg-[#1e1e26ed] modal-bottom sm:modal-middle">
                <label for='' class="modal-box bg-[#F0F0F1] text-black dark:bg-[#1b2129] dark:text-[#a5a2a2] md:text-[18px] text-[12px]  text-[#abaaaa] font-extralight md:leading-[38px] dark:text-white">
                    <h3 class="font-bold text-lg">{viewNoteData.title|| "Please try Again"}</h3>
                    <p class="py-4">{viewNoteData.details || "If you want to see this post please click again on view button, firstly It may be a problem to see note"}</p>
                    <label for="viewNote" class="btn" onClick={() => setViewNoteData("")}>Mark as Complete!</label>
                </label>
            </label>
        </div>
    )
}

export default ViewNote