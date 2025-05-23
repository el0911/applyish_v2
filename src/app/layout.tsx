// empty layout component



import React from 'react'


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
export default Layout
//