import React from 'react'

function Button({children, isDisabled, version, type }) {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

export default Button