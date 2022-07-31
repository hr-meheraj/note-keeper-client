import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify'


function ViewNote({viewNoteData, setViewNoteData,refetch}) {

    const handleMarkComplete = async() => {
       const response = await axios.put(`http://localhost:5000/note/${viewNoteData._id}`,{
         completed : true
       });
       if(response.status === 200){
            toast.success("Note added to completed")
            refetch(); 
           setViewNoteData("");
       }else{
            setViewNoteData("");
            toast.error("Someting went wrong to Add to complete")
       }
    }

    return (
        <div>
            <input type="checkbox" id="viewNote" class="modal-toggle" />
            <label for='viewNote' class="modal dark:bg-[#1e1e26ed]  modal-bottom sm:modal-middle">
                <label for='' class="modal-box bg-[#F0F0F1] text-gray-900 dark:bg-[#1b2129] dark:text-[#a5a2a2] md:text-[18px] text-[12px]  text-[#abaaaa] font-extralight md:leading-[38px] dark:text-white">
                    <h3 class="font-bold text-lg">{viewNoteData.title|| "Please try Again"}</h3>
                    <p class="py-4 text-black dark:text-[#ffffff69]">{viewNoteData.details || "If you want to see this post please click again on view button, firstly It may be a problem to see note"}</p>
                    {
                       !viewNoteData?.completed ? <label for="viewNote" class="btn" onClick={handleMarkComplete}>Mark as Complete!</label> : <label for="viewNote" class="btn" onClick={() => setViewNoteData("")}>Close</label>
                    }
                </label>
            </label>
        </div>
    )
}

export default ViewNote