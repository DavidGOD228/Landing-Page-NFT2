import React from 'react'

const ArrowRight = ({width, height, onClick}) => {
  return (
    <svg onClick={onClick} width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_88_530)">
        <circle cx="21" cy="21" r="21" transform="rotate(-90 21 21)" fill="black" fillOpacity="0.2"/>
        <circle cx="21" cy="21" r="20.5" transform="rotate(-90 21 21)" stroke="white"/>
      </g>
      <rect x="10.4883" y="22.7915" width="4.37527" height="21.8763" transform="rotate(-90 10.4883 22.7915)" fill="white"/>
      <path d="M20.6953 11.1241C21.0599 10.7595 22.5183 9.6657 23.6122 8.57189C23.6122 18.2529 32.3627 18.4162 32.3627 18.4162L32.3627 22.7915C32.3627 22.7915 20.6951 20.6039 20.6953 11.1241Z" fill="white"/>
      <path d="M20.6953 30.4477C21.4245 31.1769 22.8829 32.2707 23.6122 32.9999C23.6122 23.3189 32.3627 23.1555 32.3627 23.1555L32.3627 18.7803C32.3627 18.7803 20.6951 20.9679 20.6953 30.4477Z" fill="white"/>
      <defs>
        <filter id="filter0_b_88_530" x="-8" y="-8" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feGaussianBlur in="BackgroundImage" stdDeviation="4"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_88_530"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_88_530" result="shape"/>
        </filter>
      </defs>
    </svg>

  )
}

export default ArrowRight