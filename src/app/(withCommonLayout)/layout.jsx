
import Navbar from '@/components/Navbar'
import Footer from '@/components/shared/Footer'

import React from 'react'

function layout({children}) {
  return (
    <div>
        <Navbar/>
         <div className='min-h-[80vh]'>
         {children}
         </div>
        <Footer/>
</div>
  )
}

export default layout
