import React from 'react'
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section>
      <Helmet>
        <title>404 not found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
        <h1>404</h1>
        <h3>the page you want is not found</h3>
        <Link to="/" className="btn"> Back to home</Link>
    </section>
  )
}
export default ErrorPage;
