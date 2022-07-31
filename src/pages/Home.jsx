import React, { useEffect, useState } from 'react'
import AddNote from '../components/AddNote'
import AllNotes from '../components/AllNotes';
import TopBar from '../components/TopBar'
import axios from 'axios'
import { FcPrevious, FcNext } from 'react-icons/fc'
import { useQuery } from '@tanstack/react-query'
import { Pagination, PaginationItem } from '@mui/material';

function Home() {
  const [note, setNote] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  const { isLoading, data, error, refetch } = useQuery(["allNotes", page], async () => {
    const { data } = await axios.get(`https://hr-meheraj-note-keeper.herokuapp.com/note?size=${size}&page=${page}`);
    return data;
  });

  useEffect(() => {
    const getPage = async () => {
      const { data: count } = await axios.get(`https://hr-meheraj-note-keeper.herokuapp.com/note/count`);
      setTotalItems(count.count);
    }

    getPage();
  }, [page])


  const props = { isLoading, data, error, refetch };

  return (
    <div>
      <TopBar setNote={setNote} />
      {note && <AddNote setNote={setNote} refetch={refetch} />}
      <br />
      <hr className='bg-gray-300 py-[0.5px]' />
      <br />
      <AllNotes {...props} />
      <div className="btn-group mt-[20px] mb-[100px] flex justify-center" >
        {
          totalItems &&
          [...Array(Math.ceil(totalItems / 6)).keys()].map((each, index) => {
            return (
              <button onClick={(() => setPage(each))} className={`btn btn-sm px-6  ${(each === page) && 'bg-green-500'}`} key={index}>{each + 1}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home