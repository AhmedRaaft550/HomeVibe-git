import React from 'react'
import { Link } from 'react-router'

function ConfirmbeforeCheck() {
  return (
    <div className='mycheckoutpage'>
      <div className="mybtn">
    <Link to="/login" className='btn btn-lg'>Log in</Link>
    <Link to="/sign" className='btn btn-lg'>Create an account</Link>
      </div>
    </div>
  )
}

export default ConfirmbeforeCheck
