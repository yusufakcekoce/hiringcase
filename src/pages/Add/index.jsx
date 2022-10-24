import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ImArrowLeft2 } from "react-icons/im";
import styles from "./style.module.scss";

function Add() {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div>
      <div className={styles.headerLogo}>
        <Link to="/">
          <img src={Logo} alt="Logo" width="149px" />
        </Link>
        <Link to={"/list"} className={styles.back}>
          <h2 className={styles.logo}>
            <ImArrowLeft2 /> Return to List Page
          </h2>
        </Link>
      </div>
      <div className={styles.add}>
        <div className={styles.addForm}>
          <div className={styles.addFormLeft}>
            <div className={styles.addFormLeftItem}>
              <label className={styles.formP} htmlFor="name">
                Name Surname
              </label>
              <input
                className={styles.formInput}
                type="text"
                id="name"
                placeholder="Enter name and surname"
              />

              <label className={styles.formP} htmlFor="company">
                Company
              </label>
              <input className={styles.formInput} type="text" id="company" />

              <label className={styles.formP} htmlFor="date">
                Date
              </label>
              <input className={styles.formInput} type="date" id="date" />

              <label className={styles.formP} htmlFor="country">
                Country
              </label>
              <input
                className={styles.formInput}
                type="text"
                id="country"
                placeholder="Enter a country"
              />

              <label className={styles.formP} htmlFor="city">
                City
              </label>
              <input
                className={styles.formInput}
                type="text"
                id="city"
                placeholder="Enter a city"
              />

              <label className={styles.formP} htmlFor="email">
                Email
              </label>
              <input
                className={styles.formInput}
                type="text"
                id="email"
                placeholder="Enter a e-mail (abc@xyz.com)"
              />

              <div className={styles.button}>
                <button className={styles.buttonAdd} onClick={handleClick}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
