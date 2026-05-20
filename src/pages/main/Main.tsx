import React from "react";
import { Helmet } from "react-helmet-async";
import Book from "../../components/book/Book";
import classes from "./Main.module.scss";
import Author from "../../components/author/Author";
import Title from "../../components/title/Title";
import Characters from "../../components/char/Characters";
import Contact from "../../components/contact/Contact";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Community from "../../components/community/Community";
import Buy from "../../components/buy/Buy";
import { useMain } from "./useMain";
import SectionLayout from "../../components/layout/SectionLayout";

const Main = () => {
    const { showArrow, scrollToTop } = useMain();

    return (
        <div className={classes.main} id="main">
            <Helmet>
                <title>קטי בירמן - סיפורי חישנים</title>
                <meta
                    name="description"
                    content="ספר לילדים ומבוגרים על תקשורת חושית מאת קטי בירמן. גלו כיצד חישנים שונים משפיעים על התנהגות, רגשות ותקשורת."
                />
                <meta property="og:title" content="קטי בירמן - סיפורי חישנים" />
                <meta
                    property="og:description"
                    content="ספר לילדים ומבוגרים על תקשורת חושית מאת קטי בירמן."
                />
                <meta property="og:type" content="website" />
                <link
                    rel="canonical"
                    href="https://www.sensorsstories.co.il/"
                />
            </Helmet>
            {showArrow && (
                <button
                    className={classes.arrowUp}
                    onClick={scrollToTop}
                >
                    <ArrowCircleUpIcon className={classes.arrowUpIcon} />
                    <h4>חזרה למעלה</h4>
                </button>
            )}
            <SectionLayout><Title /></SectionLayout>
            <SectionLayout><Book /></SectionLayout>
            <SectionLayout title="אודות קטי"><Author /></SectionLayout>
            <SectionLayout title="הצטרפו לקהילה"><Community /></SectionLayout>
            <SectionLayout title="הכירו את החישנים"><Characters /></SectionLayout>
            {/* <SectionLayout><Buy /></SectionLayout> */}
            <SectionLayout title="צרו קשר"><Contact /></SectionLayout>
        </div>
    );
};

export default Main;
