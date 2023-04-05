import React, { ReactNode } from 'react'
import { Meta } from './Meta'
import { Header } from './Header'
import { Footer } from './Footer'

interface MyProps{
  children?: ReactNode
}

const Layout = ({children}: MyProps): JSX.Element => {
  return (
    <>
    <Meta />
    <div className="max-w-5xl mx-auto pt-6">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
  )
}

export default Layout