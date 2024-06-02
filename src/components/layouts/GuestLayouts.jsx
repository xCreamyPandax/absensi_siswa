import React, {useState} from "react";
import logo from "../../image/logo.png";

export default function GuestLayouts({ name, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="container">
      <nav className="navbar is-transparent mt-3">
        <div className="navbar-brand is-large">
          <a
            className="navbar-item"
            href="/"
          >
            <img
              src={logo}
              alt=""
            />
          </a>
          <div className="navbar-item">
            <p className="title is-5">UPT SMPN 3 SRENGAT</p>
          </div>
          <div
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            onClick={handleBurgerClick}
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="navbarExampleTransparentExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <a
              href="/login"
              className="navbar-item"
            >
              Masuk
            </a>
          </div>
        </div>
      </nav>
      <div className="tabs">
        <ul>
          <li className={name === "rekap" ? "is-active" : ""}>
            <a href="/">Data Kehadiran Siswa</a>
          </li>
          <li className={name === "Tentang" ? "is-active" : ""}>
            <a href="/tentang">Tentang</a>
          </li>
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
}
