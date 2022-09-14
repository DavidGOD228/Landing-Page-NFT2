import classes from './style.module.scss'

export default function InfoMorh({ morph }) {
  const { name, bodyImg } = morph;
  const importBodyImg = require('./../../../../../../assets/images/morphs/'+bodyImg)

  return (
    <>
      <img className={classes.imgMorphChoose} src={importBodyImg} alt={name} />
      <div>
        {name}
      </div>
    </>
  )
}