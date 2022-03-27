
import React from 'react'
import SidebarItems from './SidebarItems'

const Sidebar = () => {
  return (
    <div className="hidden md:inline-flex md:p-[5px] md:mr-[10px] md:flex-[0.2]">
      <SidebarItems/>
    </div>
  )
}

export default Sidebar