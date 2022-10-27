import React from 'react'

interface ILoginProps {
    children: JSX.Element
}

const Layout = ({ children }: ILoginProps) => {
  return (
    <div className='Layout'>
        {children}
    </div>
  )
}

export default Layout