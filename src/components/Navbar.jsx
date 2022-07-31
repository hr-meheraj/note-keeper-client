import React, { useState } from 'react'
import darkModer from '../handler/darkMode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Navbar() {
    const [darkMode, setDarkMode]  = useState(localStorage.getItem("mode") || "");

    if(darkMode){
        darkModer("dark");
    }else{
        darkModer("");
    }

    return (
        <div class="navbar  dark:bg-[#171c25] dark:text-white mx-auto  rounded-md max-w-[1200px] shadow-md mt-[20px]">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-[18px] font-sans" style={{fontFamily: 'monospace'}}>Note Keeper </a>
            </div>
            <div class="flex-none gap-5">
                <input type="checkbox" class="toggle toggle-md" onClick={() => setDarkMode(!darkMode)} checked={darkMode} />
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full  border-2 border-green-500">
                        <img src={"https://img.icons8.com/external-others-inmotus-design/344/external-Avatar-round-icons-others-inmotus-design-2.png"} alt="avatar" className='bg-dark '/>
                    </div>
                </label>
            </div>
            <ToastContainer/>
        </div>
    )
}
