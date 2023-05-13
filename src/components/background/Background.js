import background from '../../images/background.png';
import classes from './Background.module.css';
const Background = ({ children }) => {
  return (
    <div className={classes.background}>
      <img
        className={classes.backgroundImg}
        src={background}
        alt="backgroundImage"
      />

      {children}
    </div>
  );
};

export default Background;
