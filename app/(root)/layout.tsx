import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

function Layout
({children}:{children:React.ReactNode}) {
  return (
    <div className='root'>
      {/* the sidebar for the laptop and tablette  */}
      <Sidebar/>
      {/* the navbar for the mobile phone and others */}
      <MobileNav/>
        <div className='root-container'>
         <div className='wrapper'>
         {children}
        
         </div>
        </div>
    </div>
  )
}

export default Layout

 