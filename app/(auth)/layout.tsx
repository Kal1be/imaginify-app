import React from 'react'
import "../globals.css";
import Sidebar from '@/components/shared/Sidebar';

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='auth'>
    <div>
    {children}
    </div>
    </div>
  )
}

export default Layout
