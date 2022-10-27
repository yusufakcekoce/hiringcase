import React, { useState } from "react";
import styles from "./style.module.scss";
import Slider from "../../assets/images/slider.png";

import ReactSimplyCarousel from "react-simply-carousel";

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className={styles.carouselContainer}>
      <h1 className={styles.sliderHead}>Top news</h1>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#EEEEEE",
            border: "none",
            borderRadius: "50%",
            color: "#8A8A8A",
            cursor: "pointer",
            fontSize: "50px",
            height: 70,
            lineHeight: 1,
            textAlign: "center",
            width: 70,
          },
          children: <span className={styles.span}>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#EEEEEE",
            border: "none",
            borderRadius: "50%",
            color: "#8A8A8A",
            cursor: "pointer",
            fontSize: "50px",
            height: 70,
            lineHeight: 1,
            textAlign: "center",
            width: 70,
          },
          children: <span className={styles.span}>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div className={styles.imgContainer}>
          <img className={styles.sliderImg} src={Slider} alt="" width="327px" height="195px" />
          <p className={styles.firstP}>
            A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
          </p>
          <p className={styles.secondP}>1h ago · by Troy Corlson</p>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.sliderImg} src={Slider} alt="" width="327px" height="195px" />
          <p className={styles.firstP}>
            A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
          </p>
          <p className={styles.secondP}>1h ago · by Troy Corlson</p>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.sliderImg} src={Slider} alt="" width="327px" height="195px" />
          <p className={styles.firstP}>
            A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
          </p>
          <p className={styles.secondP}>1h ago · by Troy Corlson</p>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.sliderImg} src={Slider} alt="" width="327px" height="195px" />
          <p className={styles.firstP}>
            A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
          </p>
          <p className={styles.secondP}>1h ago · by Troy Corlson</p>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.sliderImg} src={Slider} alt="" width="327px" height="195px" />
          <p className={styles.firstP}>
            A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
          </p>
          <p className={styles.secondP}>1h ago · by Troy Corlson</p>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
