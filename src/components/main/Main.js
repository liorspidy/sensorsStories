import Book from '../book/Book';
import classes from './Main.module.css';
import Author from '../author/Author';
import Title from '../title/Title';
import Characters from '../char/Characters';

const Main = () => {
  return (
    <div className={classes.main}>
      <Title />
      <Book />
      <Author />
      <Characters />
    </div>
  );
};

export default Main;
