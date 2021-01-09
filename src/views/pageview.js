import * as React from "react"
import { Link } from "gatsby"

function PageView({page}) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <p>
        {page.contentfulPage.content.raw}
        </p>
      </main>
      <footer>Page provided by Me.</footer>
    </div>
  )
}

export default PageView
