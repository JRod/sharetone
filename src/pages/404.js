import * as React from "react"

import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>

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
    </Layout>
  )
}

export default NotFoundPage
