import React from 'react'

export default function CardItem({ className, morph, isActive, ...props }) {
  const { cardImg, name } = morph;
  const imgCardImport = require('./../../../../../../assets/images/morphs/'+cardImg);
  return <img className={`${className} ${isActive}`} src={imgCardImport} alt={name} {...props} />
}
