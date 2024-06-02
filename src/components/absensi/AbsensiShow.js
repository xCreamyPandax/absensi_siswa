import React from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import GuestLayouts from "../layouts/GuestLayouts.jsx";



const AbsensiShow = () => {
  return (
    <GuestLayouts name={"rekap"}>
      <div className="columns mt-5 is-mobile is-centered">
        <div className="column is-four-fifths">
          <table className="table is-striped is-fullwidth mt-5">
            <thead>
              <tr>
                <th>NO</th>
                <th>TANGGAL</th>
                <th>KELAS</th>
                <th>MATA PELAJARAN</th>
                <th>KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
              
            <tr>
                  <td>1</td>
                  <td>Senin, 27 Mei 2024 07:30</td>
                  <td>VII A</td>
                  <td>Bahasa Indonesia</td>
                  <td>Cipta baca puisi</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Sabtu, 25 Mei 2024 07:30</td>
                  <td>VII B</td>
                  <td>Bahasa Inggris</td>
                  <td>Listening</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Sabtu, 25 Mei 2024 08:30</td>
                  <td>VII A</td>
                  <td>MATEMATIKA</td>
                  <td>Algoritma</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </GuestLayouts>
  );
};

export default AbsensiShow;
