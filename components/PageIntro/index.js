import React from "react"

const PageIntro = ({ bgClass, title }) => {
  return (
    <div className={`row py-1 bg-secondary ${bgClass} text-light`}>
      <div className="col text-center">
        <h1>{title} </h1>
      </div>
    </div>
  )
}

export default PageIntro
