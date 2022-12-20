import { Link } from "gatsby"
import * as React from "react"

export function BodyPill(props) {
  return (
      <div className="my-auto h-full flex flex-col justify-center">
        <Link
          className="text-3xl font-bold drop-shadow-chunky transition-all hover:drop-shadow-chunkyhover"
          to={props.link}
        >
          {props.header}
        </Link>
        {props.subtitle &&
          <div className="text-xl my-2">
            {props.subtitle}
          </div>
        }
        {props.bodyCopy &&
          <div className="my-2">
            {props.bodyCopy}
          </div>
        }
      </div>)
}