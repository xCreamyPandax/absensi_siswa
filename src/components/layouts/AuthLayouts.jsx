import React, {useState} from 'react';
import logo from '../../image/logo.png';

export default function AuthLayouts({name, children}) {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className='container'>
      <nav className="navbar is-transparent mt-3">
      <div className="navbar-brand is-large">
        <a className="navbar-item" href="/">
          <img src={logo} alt="" />
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
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Purwanto Dunyo</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href={`/user/profile`}>Profile</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" >
                  Keluar
                </a>
              </div>
            </div>
        </div>
      </div>
    </nav>
    <div className="tabs">
      <ul>

          <>
          <li className={name === "Rekap" ? "is-active" : ""}>
            <a href="/absensi">Rekap</a>
          </li>
            <li className={name === "Absensi" ? "is-active" : ""}>
              <a href="/absensi/add">Absensi</a>
            </li>
            <li className={name === "User" ? "is-active" : ""}>
              <a href="/user">User</a>
            </li>
            <li className={name === "Siswa" ? "is-active" : ""}>
              <a href="/siswa">Siswa</a>
            </li>
            <li className={name === "Mapel" ? "is-active" : ""}>
              <a href="/mapel">Mata Pelajaran</a>
            </li>
            <li className={name === "Kelas" ? "is-active" : ""}>
              <a href="/kelas">Kelas</a>
            </li>
          </>
      </ul>
    </div>
    <main>{children}</main>
    </div>
  )
}
