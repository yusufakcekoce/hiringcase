import React, { useState, useMemo } from "react";
import Pagination from "../../Pagination";
import { mapper } from "../../service/mapper";
import styles from "./table.module.scss";

let PageSize = 5;

export default function Table() {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  React.useEffect(() => {
    mapper().then((data) => {
      setData(data);
    });
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <>
      <div className={styles.listContainer}>
        {currentTableData.map((item) => {
          return (
            <ul className={styles.liList}>
              <li className={styles.name}>{item.NameSurname}</li>
              <li className={styles.address}>
                {item.Country}, {item.City}
              </li>
              <li className={styles.company}>{item.Company}</li>
              <li className={styles.date}>{item.Date}</li>
            </ul>
          );
        })}
      </div>
      <Pagination
        className={styles.paginationBar}
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
