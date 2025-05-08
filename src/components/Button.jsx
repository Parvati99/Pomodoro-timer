import React from 'react'

const Button = ({title, activeclass, _callback }) => {
  return (
    <div className={activeclass} onClick={_callback}>{title}</div>
  )
}

export default Button