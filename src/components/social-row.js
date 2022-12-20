import { Link } from "gatsby"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function SocialRow(props) {
  return (
    <div class="container flex justify-center bg-white w-full sm:w-fit mx-auto p-5 rounded-[25px] border border-[#115f00]/30">
      <div className="my-auto h-full flex flex-col mx-5">
        <Link
          to="https://github.com/boosterlong"
          target="_blank"
          className="rounded-full aspect-square h-20 flex items-center"
        >
          <StaticImage
            src="../images/github.png"
            alt="Github Profile"
          />
        </Link>
      </div>
      <div className="my-auto h-full flex flex-col mx-5">
        <Link
          to="https://www.linkedin.com/in/blakechartrand/"
          target="_blank"
          className="rounded-full aspect-square h-20 flex items-center"
        >
          <StaticImage
            src="../images/linkedin.png"
            alt="LinkedIn Profile"
          />
        </Link>
      </div>
    </div>)
}