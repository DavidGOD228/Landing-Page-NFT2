import React from 'react'

const ArrowLeft = ({width, height, onClick}) => {
  return (
    <svg onClick={onClick} width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_88_524)">
        <circle cx="21" cy="21" r="21" transform="rotate(90 21 21)" fill="black" fill-opacity="0.2"/>
        <circle cx="21" cy="21" r="20.5" transform="rotate(90 21 21)" stroke="white"/>
      </g>
      <rect x="31.5117" y="19.2085" width="4.37527" height="21.8763" transform="rotate(90 31.5117 19.2085)" fill="white"/>
      <path d="M21.3047 30.8759C20.9401 31.2405 19.4817 32.3343 18.3878 33.4281C18.3878 23.7471 9.63731 23.5838 9.63731 23.5838L9.63731 19.2085C9.63731 19.2085 21.3049 21.3961 21.3047 30.8759Z" fill="white"/>
      <path d="M21.3047 11.5523C20.5755 10.8231 19.1171 9.72932 18.3878 9.00011C18.3878 18.6811 9.63731 18.8445 9.63731 18.8445L9.63731 23.2197C9.63731 23.2197 21.3049 21.0321 21.3047 11.5523Z" fill="white"/>
      <defs>
        <filter id="filter0_b_88_524" x="-8" y="-8" width="58" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feGaussianBlur in="BackgroundImage" stdDeviation="4"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_88_524"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_88_524" result="shape"/>
        </filter>
      </defs>
    </svg>

  )
}

export default ArrowLeft
