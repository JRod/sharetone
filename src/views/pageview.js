import * as React from "react"

function PageView({page}) {
  return (
    <div  dangerouslySetInnerHTML={{ __html: page.inhalt.inhalt }}/>
  )
}

export default PageView
