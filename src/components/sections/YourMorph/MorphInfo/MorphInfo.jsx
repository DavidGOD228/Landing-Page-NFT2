import React from 'react'

import classes from "../style.module.scss";

const MorphInfo = ({info}) => {
  const {image, id, name, code, city, country, dateOfBirth, height, weight, skills, attributes} = info
  return (
    <>
      <div className={classes.person}>
          <img className={classes.image} src={image} alt=""/>
        <div className={classes.about}>
          <div>
            <div className={classes.aboutPerson}>
              <h5 className={classes.number}>
                <span>#{id}</span>
              </h5>
              <div className={classes.bioContainer}>
                <h3 className={classes.bioTitle}>BIO</h3>
                <span className={classes.bioLine}/>
              </div>
              <div className={classes.column}>
                <h3 className={classes.title}>
                  Name
                </h3>
                <h4 className={classes.name}>
                  {name}
                </h4>
                <div className={classes.numeric}>
                  {code}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.location}>
            <h3 className={classes.title}>
              Location
            </h3>
            <h4 className={classes.description}>
              {city}
            </h4>
            <h4 className={classes.description}>
              {country}
            </h4>
          </div>
          <div className={classes.birth}>
            <h5 className={classes.title}>Birth</h5>
            <h4 className={classes.description}>
              {dateOfBirth}
            </h4>
          </div>
          <div className={classes.parameters}>
            <h5 className={classes.title}>Parametres</h5>
            <div className={classes.row}>
              <h4 className={classes.description}>
                {height}
              </h4>
              <h4 style={{marginLeft: 16}} className={classes.description}>
                {weight} kg
              </h4>
            </div>
          </div>
          <div className={classes.skill}>
            <h5 className={classes.title}>Traits & Skill</h5>
            <div className={classes.skillsContainer}>
              {skills}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.attributesContainer}>
        <h3 className={classes.attributesTitle}>
          Attributes
        </h3>
        <span className={classes.bioLine}/>
      </div>
      <div className={classes.barWrap}>
        {
          attributes.map(item => (
            <div key={item.title}>
              <h6 className={classes.barTitle}>{item.title}</h6>
              <div className={classes.barProgress}>
                <img className={classes.barImage} src={item.image} alt=""/>
                <span className={classes.barPercentage}>{item.percentage}</span>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default MorphInfo
