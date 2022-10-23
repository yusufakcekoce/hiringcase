import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ImArrowLeft2 } from "react-icons/im";
import styles from "./style.module.scss";

function Add() {
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

      <div className={styles.form}>
        <p className={styles.formP}>Name Surname</p>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter name and surname"
        />

        <p className={styles.formP}>Country</p>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter a country"
        />

        <p className={styles.formP}>City</p>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter a city"
        />

        <p className={styles.formP}>Email</p>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter a e-mail (abc@xyz.com)"
        />
      </div>

      <div className={styles.button}>
        <button className={styles.buttonAdd}>Add</button>
      </div>
    </div>
  );
}

export default Add;
