import classes from './Loading.module.scss';

const Loading = () => {
  const loading2 = (
    <div className={classes.wrapper}>
      <div className={`${classes.circle} ${classes.first}`}></div>
      <div className={`${classes.circle} ${classes.second}`}></div>
      <div className={`${classes.circle} ${classes.third}`}></div>
      <div className={classes.shadow}></div>
      <div className={classes.shadow}></div>
      <div className={classes.shadow}></div>
    </div>
  );

  return (
    <div className={classes.loaderContainer}>
      {loading2}
    </div>
  );
}

export default Loading