import { useEffect, useState } from 'react';
import classes from './Buy.module.css';
import { motion } from 'framer-motion';
import stimazki from '../../images/stimazki.png';
import netbook from '../../images/netbook.png';
import seferlacol from '../../images/seferlacol.png';
import tzomet from '../../images/tzomet.png';
import kids from '../../images/kids.png';
import ivrit from '../../images/ivrit.png';

const Buy = () => {
  const [isMobile, setIsMobile] = useState(false);
  const buyBoxVariants = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 1 } },
  };

  const storeVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 2 } },
    clicked: { scale: 0.9, transition: { duration: 0.2 } },
  };

  const kidsVariants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', bounce: 0.4, duration: 2 },
    },
  };

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  useEffect(() => {
    setIsMobile(isMobileDevice());

    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const buyBoxClass = isMobile ? classes.buyBoxMobile : classes.buyBox;
  const titleClass = isMobile ? classes.titleMobile : classes.title;
  const storesClass = isMobile ? classes.storesMobile : classes.stores;
  const storeImgClass = isMobile ? classes.storeImgMobile : classes.storeImg;
  const kidsClass = isMobile ? classes.kidsMobile : classes.kids;
  return (
    <motion.div
      className={classes.buyBox}
      id="buy"
      initial={'offscreen'}
      whileInView={'onscreen'}
      transition={{ staggerChildren: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={titleClass} variants={buyBoxVariants}>
        <h1>רכשו כעת</h1>
      </motion.div>
      <motion.div className={storesClass} variants={buyBoxVariants}>
        <motion.div
          className={storeImgClass}
          variants={storeVariants}
          whileTap="clicked"
        >
          <a href="https://www.steimatzky.co.il/011360850">
            <img src={stimazki} alt="סטימצקי" />
          </a>
        </motion.div>
        <motion.div
          className={storeImgClass}
          variants={storeVariants}
          whileTap="clicked"
        >
          <a href="https://www.netbook.co.il/Book.aspx?id=13856">
            <img src={netbook} alt="netbook" />
          </a>
        </motion.div>
        <motion.div
          className={storeImgClass}
          variants={storeVariants}
          whileTap="clicked"
        >
          <a href="http://www.sifriyot.co.il/ItemInfo.aspx?Type=1&Barcode=338-1098">
            <img src={seferlacol} alt="ספר לכל" />
          </a>
        </motion.div>
        <motion.div
          className={storeImgClass}
          variants={storeVariants}
          whileTap="clicked"
        >
          <a href="https://www.booknet.co.il/%D7%9E%D7%95%D7%A6%D7%A8%D7%99%D7%9D/%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%99-%D7%97%D7%99%D7%A9%D7%A0%D7%99%D7%9D-33800010986">
            <img src={tzomet} alt="צומת ספרים" />
          </a>
        </motion.div>
        <motion.div
          className={storeImgClass}
          variants={storeVariants}
          whileTap="clicked"
        >
          <a href="https://www.e-vrit.co.il/Product/27434/%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%99_%D7%97%D7%99%D7%A9%D7%A0%D7%99%D7%9D">
            <img src={ivrit} alt="עברית" />
          </a>
        </motion.div>
      </motion.div>
      <motion.div className={kidsClass} variants={kidsVariants}>
        <motion.img
          whileHover={{
            rotate: [0, -1, 1, -1, 1, 0],
            transition: { duration: 0.4 },
          }}
          src={kids}
          alt="ילדים"
        />
      </motion.div>
    </motion.div>
  );
};

export default Buy;
