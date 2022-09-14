import React from 'react'

import classes from './style.module.scss'

const Phone = ({classname}) => {
  return (
   <div className={`${classes.video} ${classname}`}>
     <div className={classes.videoWrap}>
       <div className={classes.videoContainer}>
       </div>
     </div>
   </div>
  )
}

export default Phone
