import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
      <section>
        <h1>404</h1>
        <h3>the page you want is not found</h3>
        <Link to="/" className="btn"> Back to home</Link>
      </section>
  )
}
export default ErrorPage;
