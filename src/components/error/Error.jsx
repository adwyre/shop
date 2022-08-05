import React from "react"
import '../../index.css'

const Error = () => {
  return (
    <div className="error-page d-flex align-center">
      <div className="m-auto w-auto h-auto">
        <h3 className="text-muted">Unauthorized to view this page</h3>
        <h4 className="text-muted">Please log in</h4>
      </div>
    </div>
  )
}

export default Error;