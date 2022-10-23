import React from "react";
import styles from "./style.module.scss";
import Slider from "../../assets/images/slider.png";

import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <i className={styles.arrow}>
          <GoChevronLeft />
        </i>
        <div className={styles.carouselContainerItem}>
          <img src={Slider} alt="Slider" width="327px" height="195px" />
          <p className={styles.firstP}>
            A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
          </p>
          <p className={styles.secondP}>1h ago · by Troy Corlson</p>
        </div>
        <div className={styles.carouselContainerItem}>
          <img src={Slider} alt="Slider" width="327px" height="195px" />
          <p className={styles.firstP}>
            A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
          </p>
          <p className={styles.secondP}>1h ago · by Troy Corlson</p>
        </div>
        <div className={styles.carouselContainerItem}>
          <img src={Slider} alt="Slider" width="327px" height="195px" />
          <p className={styles.firstP}>
            A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
          </p>
          <p className={styles.secondP}>1h ago · by Troy Corlson</p>
        </div>
        {/* <div className={styles.carouselContainerItem}>
          <img src={Slider} alt="Slider" width="327px" height="195px" />
        </div> */}
        <i className={styles.arrow}>
        <GoChevronRight />
        </i>
      </div>
    </div>
  );
}

export default Carousel;
