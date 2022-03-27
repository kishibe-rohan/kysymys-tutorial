import React from 'react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Home = () => {
  return (
    <div className="w-full min-w-fit">
       <Header/>
       <div className='flex justify-center px-12 bg-black/5 w-full min-w-fit'>
          <div className='flex w-full py-2 max-w-[1280px]'>
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
    </div>
    </div>
  )
}

export default Home
