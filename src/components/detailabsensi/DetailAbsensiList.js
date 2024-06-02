import React from "react";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import GuestLayouts from "../layouts/GuestLayouts";

const DetailAbsensiList = () => {

  return (
    <GuestLayouts name={"rekap"}>
      <div className="columns mt-5 is-mobile is-centered">
        <div className="column is-four-fifths">
          <div className="box mt-1">
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Search by name"
                />
              </p>
              <p className="control is-expanded">
                <input
                  className="input"
                  type="date"
                  placeholder="Search by date"
                />
              </p>
            </div>
          </div>
          <div className="box mt-1 table-container">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>TANGGAL</th>
                  <th>NAMA</th>
                  <th>KETERANGAN</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                      <td>1</td>
                      <td>Senin, 27 Mei 2024 07:30</td>
                      <td>Agus Efendi</td>
                      <td></td>
                      <td>Hadir</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Senin, 27 Mei 2024 07:30</td>
                      <td>Bima Ardana Putra</td>
                      <td></td>
                      <td>Hadir</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Senin, 27 Mei 2024 07:30</td>
                      <td>Muhammad Bagus Irawan</td>
                      <td></td>
                      <td>Hadir</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Senin, 27 Mei 2024 07:30</td>
                      <td>Salsabila Putri</td>
                      <td></td>
                      <td>Hadir</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Senin, 27 Mei 2024 07:30</td>
                      <td>Wahyuning Agunge Samudro</td>
                      <td>Acara Keluarga</td>
                      <td>Izin</td>
                    </tr>
              </tbody>
            </table>
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </GuestLayouts>
  );
};

export default DetailAbsensiList;
