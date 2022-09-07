import React from 'react'

import EA from '../../../assets/images/ea.svg'
import CDProjectRed from '../../../assets/images/cdProjectRed.svg'
import Ubisoft from '../../../assets/images/ubisoft.svg'
import Garena from '../../../assets/images/garena.svg'
import Valve from '../../../assets/images/valve.svg'
import SuperCell from '../../../assets/images/superCell.svg'
import LKWD from '../../../assets/images/lkwd.svg'

import classes from './style.module.scss'

const CombinedGame = () => {
  return (
    <div className={classes.container}>
      <h4 className={classes.title}>Combined game expirience</h4>
      <div className={classes.companies}>
        <img src={EA} alt=""/>
        <img src={CDProjectRed} alt=""/>
        <img src={Ubisoft} alt=""/>
        <img src={Garena} alt=""/>
        <img src={Valve} alt=""/>
        <img src={SuperCell} alt=""/>
        <img src={LKWD} alt=""/>
      </div>
    </div>
  )
}

export default CombinedGame
