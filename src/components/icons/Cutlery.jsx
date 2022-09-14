import React from 'react'

const Cutlery = ({color, width, height}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.88813 0.79023C0.775554 1.22854 0.492003 3.07968 0.258057 4.90392C-0.122591 7.86984 -0.101834 8.39602 0.452602 9.87629C0.793496 10.787 1.53192 11.8781 2.09304 12.3013L3.11361 13.0703V19.9717C3.11361 25.7672 3.20227 26.9631 3.66629 27.4365C4.36813 28.1517 5.02529 28.1517 5.72713 27.4365C6.19116 26.9631 6.27981 25.7672 6.27981 19.9717V13.0703L7.30038 12.3013C7.8615 11.8781 8.59993 10.787 8.94082 9.87629C9.49526 8.39602 9.51602 7.86984 9.13537 4.90392C8.60134 0.741091 8.40011 -0.0397538 7.90618 0.126673C7.6659 0.207376 7.44216 1.65393 7.33521 3.81784C7.1959 6.63563 7.05131 7.37594 6.6397 7.37594C6.1106 7.37594 5.88931 6.42903 5.40418 2.08542C5.24974 0.704147 5.01615 0.023015 4.69671 0.023015C4.37728 0.023015 4.14368 0.704147 3.98924 2.08542C3.50411 6.42903 3.28283 7.37594 2.75372 7.37594C2.34212 7.37594 2.19753 6.63563 2.05822 3.81784C1.8883 0.380618 1.35004 -1.01142 0.88813 0.79023ZM18.1597 0.650704C17.1912 1.77194 15.7854 4.97817 15.2535 7.27946C14.3079 11.368 14.6783 14.4276 16.2829 15.7852C16.7374 16.17 16.8338 17.1797 16.8338 21.5621C16.8338 25.9118 16.9337 26.9749 17.3865 27.4365C17.6908 27.7464 18.1545 28 18.4169 28C18.6793 28 19.143 27.7464 19.4473 27.4365C19.9293 26.9448 20 25.2131 20 13.8784C20 4.24969 19.8906 0.772296 19.5778 0.45343C19.0143 -0.121174 18.8007 -0.0914037 18.1597 0.650704Z" fill={color}/>
    </svg>
  )
}

export default Cutlery
