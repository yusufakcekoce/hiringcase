import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Table from "./Table";
import { mapper } from "../../service/mapper";

function List() {
  const [Result, setResult] = useState(null);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    mapper().then((data) => {
      setData(data);
    });
  }, []);

  const searchChange = (e) => {
    const searchResult = data.filter((item) =>
      item.NameSurname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setResult(searchResult);
  };

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
            onChange={searchChange}
          />
          <button className={styles.searchBtn}>Search</button>
        </div>

        <Link to="/add">
          <button className={styles.newRecord}>Add new record</button>
        </Link>
      </div>

      

      <Table data={Result !== null ? Result : data} />
    </div>
  );
}

export default List;
