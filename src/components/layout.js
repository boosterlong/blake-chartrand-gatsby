import * as React from "react"

import Header from "./header"
import "../index.css"
import { SocialRow } from "./social-row"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {

  return (
    <div className="m-3">
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Helmet>
      <Header siteTitle={`Blake Chartrand`} />
      <div
        className="mx-auto max-w-3xl"
      >
        <main>
          {(children.length > 1) ?
            children.map(child => <div className="bg-white border border-[#115f00]/30 h-fit p-5 my-5 rounded-[25px]">{child}</div>)
            : <div className="bg-white border border-[#115f00]/30 h-fit p-5 my-5 rounded-[25px]">{children}</div>}
        </main>
        <SocialRow />
        <div className="h-10"></div>
        <footer
          className="bg-white py-2.5 px-5 rounded-lg fixed bottom-0 right-5"
        >
          © {new Date().getFullYear()} &middot; Blake Chartrand &middot; Background by <a className="text-accent" href="https://heropatterns.com/">Hero Patterns</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
