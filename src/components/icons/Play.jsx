import React from 'react'

const Play = ({color, width, height}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 9.5L0 19L6.56156e-07 0L13 9.5Z" fill={color}/>
    </svg>
  )
}

export default Play
