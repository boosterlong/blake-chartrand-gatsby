import * as React from "react"
import { HeaderPill } from "./header-pill"

const Header = ({ siteTitle }) => (
  <header>
    <HeaderPill
      header={"Blake Chartrand"}
      subtitle={"Web developer, problem solver, fun guy."}
      altText={"Headshot of Blake Chartrand"}
    />
  </header>
)

export default Header
