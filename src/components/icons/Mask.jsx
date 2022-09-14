import React from 'react'

const Mask = ({color, width, height}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.1814 0.0776931C3.20734 0.578701 0.719608 1.13642 0.336442 1.61201C0.0387195 1.98121 -0.0558378 4.36344 0.0307447 9.30469C0.147327 15.9672 0.220619 16.5977 1.08682 18.4179C1.59834 19.4934 2.88607 21.271 3.94747 22.3677C5.8819 24.3658 11.3985 28 12.4979 28C13.5972 28 19.1138 24.3658 21.0483 22.3677C22.1097 21.271 23.3974 19.4934 23.9089 18.4179C24.7774 16.5934 24.848 15.9758 24.9631 9.20144C25.0599 3.52608 24.9771 1.84745 24.5834 1.51306C23.6898 0.754308 19.6557 0.196198 14.0169 0.0514887C10.9884 -0.0263416 7.91242 -0.0146082 7.1814 0.0776931ZM9.63875 8.58349C10.0698 8.90811 10.2498 9.36296 10.1032 9.75681C9.75381 10.6939 4.98873 10.6939 4.63937 9.75681C4.09481 8.29485 8.02938 7.37145 9.63875 8.58349ZM19.8919 8.58349C20.323 8.90811 20.503 9.36296 20.3564 9.75681C20.1676 10.2633 19.587 10.4002 17.6245 10.4002C15.6619 10.4002 15.0813 10.2633 14.8926 9.75681C14.348 8.29485 18.2826 7.37145 19.8919 8.58349ZM17.9131 17.0932C17.5717 18.4386 15.2867 20.5083 13.8327 20.7892C13.0986 20.9311 11.8971 20.9311 11.1631 20.7892C9.709 20.5083 7.42406 18.4386 7.08267 17.0932C6.87608 16.2797 6.95963 16.2668 12.4979 16.2668C18.0361 16.2668 18.1197 16.2797 17.9131 17.0932Z" fill={color}/>
    </svg>
  )
}

export default Mask
