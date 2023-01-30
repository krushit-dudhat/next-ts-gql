import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  footer?: boolean
}

const Layout = ({ children, title = 'This is the default title', footer = true }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="navbar navbar-light color-offwhite">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>
    </header>
    {children}
    {footer && (
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    )}
  </div>
)

export default Layout
