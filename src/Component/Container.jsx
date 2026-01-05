import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1280px] px-2 mx-auto ${className}`}>{children}</div>
  )
}

export default Container