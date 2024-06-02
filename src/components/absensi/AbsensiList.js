import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { BsGearFill, BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AuthLayouts from "../layouts/AuthLayouts.jsx";

const AbsensiList = () => {
  const submit = async (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <AuthLayouts name={"Rekap"}>
      <div className="columns mt-5 is-mobile is-centered">
        <div className="column is-four-fifths">
          <div className="box">
            <Link to="/absensi/add" className="button is-success">
              Tambah Absensi
            </Link>
          </div>
          <div className="box mt-2 table-container">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>TANGGAL</th>
                  <th>KELAS</th>
                  <th>MATA PELAJARAN</th>
                  <th>KETERANGAN</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Senin, 27 Mei 2024 07:30</td>
                  <td>VII A</td>
                  <td>Bahasa Indonesia</td>
                  <td>Cipta baca puisi</td>
                  <td>
                    <Link to={`edit`} className="button is-info is-small mr-3">
                      <BsGearFill />
                    </Link>
                    <button className="button is-danger is-small">
                      <BsTrashFill />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Sabtu, 25 Mei 2024 07:30</td>
                  <td>VII B</td>
                  <td>Bahasa Inggris</td>
                  <td>Listening</td>
                  <td>
                    <Link to={`edit`} className="button is-info is-small mr-3">
                      <BsGearFill />
                    </Link>
                    <button
                      onClick={submit}
                      className="button is-danger is-small"
                    >
                      <BsTrashFill />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Sabtu, 25 Mei 2024 08:30</td>
                  <td>VII A</td>
                  <td>MATEMATIKA</td>
                  <td>Algoritma</td>
                  <td>
                    <Link to={`edit`} className="button is-info is-small mr-3">
                      <BsGearFill />
                    </Link>
                    <button
                      onClick={submit}
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

export default AbsensiList;
