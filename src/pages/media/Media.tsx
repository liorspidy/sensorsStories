import { Helmet } from "react-helmet-async";
import classes from "./Media.module.scss";
import Carousel from "../../tools/carousel/Carousel";
import { motion } from "framer-motion";
import { useMedia } from "./useMedia";

const Media = () => {
  useMedia();

  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Helmet>
        <title>ראיונות וקורסים - סיפורי חישנים</title>
        <meta name="description" content="צפו בראיונות עם קטי בירמן על תקשורת חושית ורגשית. הרצאות וסדנאות על שפת הרגש וההבדלים בין בני אדם." />
        <meta property="og:title" content="ראיונות וקורסים - סיפורי חישנים" />
        <meta property="og:description" content="ראיונות, הרצאות וסדנאות על תקשורת חושית עם קטי בירמן." />
        <link rel="canonical" href="https://www.sensorsstories.co.il/courses" />
      </Helmet>
      <motion.div
        className={classes.media}
        id="media"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={classes.title} variants={aboutBoxVarients}>
        <h2>ראיונות בתקשורת</h2>
      </motion.div>
      <Carousel>
        <iframe
          src="https://www.youtube.com/embed/3OhJ62f36kI?si=UCsTNTBZ8OLGgOcc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            border: "none",
          }}
        />
        <iframe
          src="https://www.youtube.com/embed/kKTOGu8azZI?si=gaTOTKR6AC6MiIl_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            border: "none",
          }}
        />
      </Carousel>
    </motion.div>
    </>
  );
};

export default Media;
