import styles from './Backdrop.module.css'

const Backdrop = ({show, clicked}) => {

  let classes = [styles.Backdrop, styles.Close]

  if (show) {
    classes = [styles.Backdrop, styles.Open]
  }
  
  return (
    <div className={classes.join(' ')} onClick={clicked}></div> 
  )
}

export default Backdrop