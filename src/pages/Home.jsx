import React, { useState } from 'react'
import AddNote from '../components/AddNote'
import AllNotes from '../components/AllNotes';
import TopBar from '../components/TopBar'

function Home() {
  const [note, setNote] = useState(true);
  return (
    <div>
        <TopBar setNote={setNote}/>
       {note &&  <AddNote setNote={setNote}/>}
       <br/>
       <hr/>
      <br/>
      <AllNotes/>
    </div>
  )
}

export default Home