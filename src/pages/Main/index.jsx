import React from "react";
import styles from "./style.module.scss";
import Logo from "../../assets/images/logo.png";

function Main() {
  return (
    <div>
      <button className={styles.newRecord}>Add new record</button>

      <div className={styles.logo}>
        <img src={Logo} alt="Logo" width="278px" />
      </div>

      <div className={styles.searchClass}>
        <p className={styles.textAuto}>Find in records</p>
        <div className={styles.input}>
          <input type="text" placeholder="Search" />
          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
