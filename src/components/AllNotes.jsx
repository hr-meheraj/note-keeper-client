import React, { useState } from 'react'
import Note from './Note';
import DataLoading from './DataLoading';
import { motion } from "framer-motion";


export default function AllNotes({ isLoading, error, data, refetch }) {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    const [pinend, setPinned] = useState([]);


    if (isLoading) {
        return (
            <DataLoading />
        )
    }
    if (error) {
        console.log("inside", error);
    }


    const container = {
        hidden: { opacity: 1, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        animate : { y : 0},
        hidden: { y: 20, opacity: 0, rotate : 3},
        visible: {
            y: 0,
            opacity: 1,
            rotate : 0
        }
    };

    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mb-[30px]'>
                {
                    data?.filter(e => e.pinned === true)?.map(note => {
                        return (
                            <motion.div variants={item} className='item shadow-md rounded-md p-4 dark:bg-[#171c25] item'>
                                <Note refetch={refetch} note={note} key={note?.id} />
                            </motion.div>
                        )
                    })
                }
                {
                    data?.filter(e => !e.pinned)?.map(note => {
                        return (
                            <motion.div variants={item} className='item shadow-md rounded-md p-4 dark:bg-[#171c25] item'>
                                <Note refetch={refetch} note={note} key={note?.id} />
                            </motion.div>
                        )
                    })
                }
            </motion.div>
            {/* 
            <h2 className='text-xl font-bold my-3 text-gray-400'>Others</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mb-[30px]'>
            </div> */}
        </>
    )
}
