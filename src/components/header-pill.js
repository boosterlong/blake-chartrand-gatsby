import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export function HeaderPill(props) {
  return (
    <div
      className="
      max-w-3xl
      bg-white
      flex
      justify-between
      align-center
      h-fit
      mt-5
      mx-auto
      rounded-[25px]
      border
      border-[#115f00]/30
      p-5 sm:p-0 sm:pl-5"
    >
      <div className="my-auto mr-5">
        <Link
          className="text-5xl font-bold drop-shadow-chunky transition-all hover:drop-shadow-chunkyhover"
          to="/"
        >
          {props.header}
        </Link>
        <div
          className="text-xl my-2"
        >
          {props.subtitle}
        </div>
      </div>
      <StaticImage
        src={'../images/headshot.jpg'}
        alt={props.alt}
        className="rounded-[25px] sm:rounded-l-[0px] h-full w-40"
        imgStyle={{ borderRadius: '25px' }}
      />
    </div>)
}