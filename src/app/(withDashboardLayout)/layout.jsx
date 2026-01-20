import DashBoardSidebar from '@/components/DashBoardSidebar'
import React from 'react'

function layout({children}) {
  return (
    <div className='flex '>
        <div> <DashBoardSidebar/> </div>
        <div> {children} </div>
    </div>
  )
}

export default layout
