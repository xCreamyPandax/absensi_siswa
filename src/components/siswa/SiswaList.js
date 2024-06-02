import React from "react";
import { Link } from "react-router-dom";
import { BsGearFill, BsTrashFill } from "react-icons/bs";
import AuthLayouts from "../layouts/AuthLayouts.jsx";

const SiswaList = () => {
  return (
    <AuthLayouts name={"Siswa"}>
      <div className="columns mt-5 is-mobile is-centered">
        <div className="column is-four-fifths">
        <div className=" box">
            <div className="columns">
              <div className="column">
          <Link
            to="/siswa/add"
            className="button is-primary"
          >
            Tambah Siswa
          </Link>
              </div>
              <div className="column">
                <input
                  type="file"
                  className="input"
                />
              </div>
              <div className="column">
                <button
                  className="button is-info"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
          <div className="box mt-1 table-container">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>NO</th>
                <th>NISN</th>
                <th>NAMA</th>
                <th>ALAMAT</th>
                <th>TEMPAT/TANGGAL LAHIR</th>
                <th>KELAS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>12789563</td>
                  <td>Agus Efendi</td>
                  <td>Pikatan Wonodadi Blitar</td>
                  <td>
                    Kediri, 17 Oktober 2005
                  </td>
                  <td>VII A</td>
                  <td>
                    <Link
                      to={`edit/`}
                      className="button is-info is-small mr-3"
                    >
                      <BsGearFill />
                    </Link>
                    <button
                      className="button is-danger is-small"
                    >
                      <BsTrashFill />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>13429563</td>
                  <td>Maulida Sofi</td>
                  <td>Mangunan Udanawu Blitar</td>
                  <td>
                    Bliatr, 5 Mei 2005
                  </td>
                  <td>VII C</td>
                  <td>
                    <Link
                      to={`edit/`}
                      className="button is-info is-small mr-3"
                    >
                      <BsGearFill />
                    </Link>
                    <button
                      className="button is-danger is-small"
                    >
                      <BsTrashFill />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>13559543</td>
                  <td>Muhammad Bagus Pratama</td>
                  <td>Karanggayam Srengat Blitar</td>
                  <td>
                    Blitar, 20 Juni 2005
                  </td>
                  <td>VII A</td>
                  <td>
                    <Link
                      to={`edit/`}
                      className="button is-info is-small mr-3"
                    >
                      <BsGearFill />
                    </Link>
                    <button
                      className="button is-danger is-small"
                    >
                      <BsTrashFill />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>13679333</td>
                  <td>Sapto Mudo Kartono</td>
                  <td>Pikatan Wonodadi Blitar</td>
                  <td>
                    Blitar, 3 Januari 2006
                  </td>
                  <td>VII B</td>
                  <td>
                    <Link
                      to={`edit/`}
                      className="button is-info is-small mr-3"
                    >
                      <BsGearFill />
                    </Link>
                    <button
                      className="button is-danger is-small"
                    >
                      <BsTrashFill />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>137686363</td>
                  <td>Wahyu Agunging Samudro</td>
                  <td>Pojok Ponggok Blitar</td>
                  <td>
                    Kediri, 21 Juni 2005
                  </td>
                  <td>VII B</td>
                  <td>
                    <Link
                      to={`edit/`}
                      className="button is-info is-small mr-3"
                    >
                      <BsGearFill />
                    </Link>
                    <button
                      className="button is-danger is-small"
                    >
                      <BsTrashFill />
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </AuthLayouts>
  );
};

export default SiswaList;
