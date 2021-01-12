import * as React from "react"

function PageView({page}) {
  return (
    <div className="font-sans text-base" dangerouslySetInnerHTML={{ __html: page.inhalt.inhalt }}/>
  )
}

export default PageView
