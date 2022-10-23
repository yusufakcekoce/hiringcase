import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { mapper } from "../../service/mapper";

function List() {
  const data = mapper().then((data) => {
     console.log(data);
    });
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

      <div className={styles.list}>
        <ul>

        </ul>
      </div>
    </div>
  );
}

export default List;
