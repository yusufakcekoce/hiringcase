import React, { useState, useMemo, useCallback } from "react";
import Pagination from "../../pagination/Pagination";
import { mapper } from "../../service/mapper";
import styles from "./table.module.scss";
// import { GrLocation } from "react-icons/gr";
import { TbArrowsDownUp } from "react-icons/tb";

let PageSize = 5;

export default function Table({ data }) {
  const [, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState("Order By");

  React.useEffect(() => {
    mapper().then((data) => {
      setData(data);
    });
  }, []);

  const sortData = useCallback((data) => {
    if (selected === "A-Z") {
      return data.sort((a, b) => a.NameSurname.localeCompare(b.NameSurname));
    } else if (selected === "Z-A") {
      return data.sort((a, b) => b.NameSurname.localeCompare(a.NameSurname));
    } else if (selected === "Year ascending") {
      console.log("hello");
      return data;
    } else if (selected === "Year descending") {
      console.log("hello2");
      return data;
    } else {
      return data;
    }
  }, [selected]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return sortData(data).slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, sortData]);

  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.dropdownBtn} onClick={(e) => setOpen(!isOpen)}>
          <i>
            <TbArrowsDownUp />
          </i>
          {selected}{" "}
        </div>
        {isOpen && (
          <div
            className={styles.dropdownContent}
            onClick={(e) => {
              setOpen(false);
              setSelected(e.target.innerText);
              sortData(e.target.innerText);
            }}
          >
            <div className={styles.dropdownItem}>A-Z</div>
            <div className={styles.dropdownItem}>Z-A</div>
            <div className={styles.dropdownItem}>Year ascending</div>
            <div className={styles.dropdownItem}>Year descending</div>
          </div>
        )}
      </div>
      <div className={styles.listContainer}>
        {currentTableData.map((item) => {
          return (
            <>
              <ul className={styles.listContext}>
                {/* <i className={styles.arrow}>
                  <GrLocation />
                </i> */}
                <li className={styles.leftLi}>
                  <p className={styles.nameP}>{item.NameSurname}</p>
                  <p className={styles.countryP}>
                    {item.Country}, {item.City}
                  </p>
                </li>
                <li className={styles.rightLi}>
                  <p className={styles.companyP}>{item.Company}</p>
                  <p className={styles.dateP}>{item.Date}</p>
                </li>
              </ul>
              <li className={styles.underline}></li>
            </>
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
