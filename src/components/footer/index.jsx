import React from "react";
import styles from "./style.module.scss";
import Image1 from "../../assets/images/image1.png";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <img src={Image1} alt="" />
      <div className={styles.footerText}>
        <p>
          <b>İletişim</b>
        </p>
        <p>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
        <p className={styles.scndText}>
          {" "}
          <b>Email: bilgi@tesodev.com</b>
        </p>
      </div>
      <div className={styles.mapContext}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2795624019723!2d28.88837317659794!3d41.019139318755364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1666264561124!5m2!1str!2str"
          width="600"
          height="200"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
