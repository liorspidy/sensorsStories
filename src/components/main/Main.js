import { Routes, Route } from "react-router-dom";
import Book from "../book/Book";
import classes from "./Main.module.css";
import Author from "../author/Author";
import Title from "../title/Title";

const Main = () => {
  return (
    <div className={classes.main}>
      <Title />
      <Book />
      <Author />
    </div>
  );
};

export default Main;
