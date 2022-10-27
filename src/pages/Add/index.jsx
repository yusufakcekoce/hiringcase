import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ImArrowLeft2 } from "react-icons/im";
import styles from "./style.module.scss";

function Add() {
  const addRecord = (e) => {
    e.preventDefault();
    const NameSurname = document.getElementById("NameSurname").value;
    const Company = document.getElementById("Company").value;
    const Country = document.getElementById("Country").value;
    const City = document.getElementById("City").value;
    const Date = document.getElementById("Date").value;
    const Email = document.getElementById("Email").value;

    const data = {
      NameSurname,
      Company,
      Country,
      City,
      Date,
      Email,
    };
    console.log(data);
    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
              <form onSubmit={addRecord} className={styles.addFormLabels} >
                <label className={styles.formP} htmlFor="name">
                  Name Surname
                </label>
                <input
                  required
                  className={styles.formInput}
                  type="text"
                  id="NameSurname"
                  placeholder="Enter name and surname"
                  minLength={4}
                  maxLength={60}
                  pattern="[A-Z a-z]*"
                />

                <label className={styles.formP} htmlFor="company">
                  Company
                </label>
                <input
                  required
                  className={styles.formInput}
                  type="text"
                  id="Company"
                />

                <label className={styles.formP} htmlFor="date">
                  Date
                </label>
                <input
                  required
                  className={styles.formInput}
                  type="date"
                  id="Date"
                />

                <label className={styles.formP} htmlFor="country">
                  Country
                </label>
                <input
                  required
                  className={styles.formInput}
                  type="text"
                  id="Country"
                  placeholder="Enter a country"
                  minLength={2}
                  maxLength={40}
                  pattern="[A-Z a-z]*"
                />

                <label className={styles.formP} htmlFor="city">
                  City
                </label>
                <input
                  required
                  className={styles.formInput}
                  type="text"
                  id="City"
                  placeholder="Enter a city"
                  minLength={2}
                  maxLength={40}
                  pattern="[A-Z a-z]*"
                />

                <label className={styles.formP} htmlFor="email">
                  Email
                </label>
                <input
                  required
                  className={styles.formInput}
                  type="email"
                  id="Email"
                  placeholder="Enter a e-mail (abc@xyz.com)"
                />

                <div className={styles.button}>
                  <input type="submit" className={styles.inputBtn} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
