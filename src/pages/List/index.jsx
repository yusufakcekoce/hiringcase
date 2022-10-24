import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Table from "./Table";

function List() {
  return (
    <div>
      <div className={styles.listHeader}>
        <Link to="/">
          <img src={Logo} alt="Logo" width="149px" />
        </Link>
        <div className={styles.searchContext}>
          <input
            type="text"
            placeholder="Search"
            className={styles.listSearch}
          />
          <button className={styles.searchBtn}>Search</button>
        </div>
        <Link to="/add">
          <button className={styles.newRecord}>Add new record</button>
        </Link>
      </div>

      <Table />
    </div>
  );
}

export default List;
