import * as React from "react"

import LeftSideBarLayout from "../components/layouts/leftsidebarlayout";

const NotFoundPage = () => {
  return (
    <LeftSideBarLayout>

    <main  >
      <title>Not found</title>
      <h1  >Page not found</h1>
      <p >
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code >src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />

      </p>
    </main>
    </LeftSideBarLayout>
  )
}

export default NotFoundPage
