import { Routes, Route } from 'react-router-dom';
import Book from '../book/Book';
import classes from './Main.module.css';

const Main = () => {
  return (
    <div className={classes.main}>
      <Routes>
        <Route path="/" element={<Book />} />
      </Routes>
    </div>
  );
};

export default Main;
