import React, { useState } from 'react'
import AddNote from '../components/AddNote'
import AllNotes from '../components/AllNotes';
import TopBar from '../components/TopBar'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

function Home() {
  const [note, setNote] = useState(true);
  const { isLoading, data, error, refetch } = useQuery(["allNotes"], async () => {
    const { data } = await axios.get('http://localhost:5000/note');
    return data;
});

 const props = {isLoading, data, error, refetch};

  return (
    <div>
        <TopBar setNote={setNote}/>
       {note &&  <AddNote setNote={setNote} refetch={refetch}/>}
       <br/>
       <hr className='bg-gray-300 py-[0.5px]'/>
      <br/>
        <AllNotes {...props} />
    </div>
  )
}

export default Home