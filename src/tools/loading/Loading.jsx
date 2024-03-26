import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div className={classes.loaderContainer}>
        <div className={classes.loader}></div>
    </div>
  )
}

export default Loading