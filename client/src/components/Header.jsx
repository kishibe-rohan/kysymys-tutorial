import React from 'react'

import {AssignmentTurnedInOutlined,Close, NotificationsOutlined, 
    FeaturedPlayListOutlined,PeopleAltOutlined,
    Search,ExpandMore,Home} from "@material-ui/icons";

import {Avatar,Button} from '@material-ui/core'

const Header = () => {
  return (
    <div className='flex items-center bg-white sticky z-50 shadow-sm top-0 justify-center p-[3px]'>
        <div className='flex'>
            <span className="text-orange-500 text-lg font-semibold mr-5">Kysyms</span>
        </div>
        <div className='flex'>
           <div className="headerIcon">
           <Home/>
           </div>
           <div className="headerIcon">
             <FeaturedPlayListOutlined/>
           </div>
           <div className="headerIcon">
             <AssignmentTurnedInOutlined/>
           </div>
           <div className="headerIcon">
             <PeopleAltOutlined />
           </div>
           <div className="headerIcon">
             <NotificationsOutlined />
           </div>
        </div>

        <div className='hidden md:flex items-center border-2 rounded-lg border-solid border-gray-300 p-[5px] ml-[5px]'>
           <Search/>
           <input className="bg-transparent outline-none border-none " type="text" placeholder='Search..'/>
         </div>

        <div className="flex items-center ml-[25px]">
           <span>
             <Avatar/>
           </span>
           <button className="px-2 py-1 rounded-lg ml-1 bg-orange-300 hover:bg-orange-500">Add Question</button>
        </div>
    </div>
  )
}

export default Header
