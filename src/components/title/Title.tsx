import React from "react";
import title from "../../assets/images/title.png";
import Clouds from "../clouds/Clouds";
import classes from "./Title.module.scss";
import { useTitle } from "./useTitle";

const Title = () => {
    const { scrollToElement } = useTitle();

    return (
        <div className={classes.titleBox}>
            <div className={classes.title}>
                <img
                    src={title}
                    alt="סיפורי חיישנים"
                    aria-label="כותרת סיפורי חיישנים"
                />
                <div
                    className={classes.scrollDown}
                    onClick={scrollToElement}
                >
                    <div className={classes.scrollDownCircle}></div>
                </div>
            </div>

            <Clouds></Clouds>
        </div>
    );
};

export default Title;
