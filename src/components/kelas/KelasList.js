import React from "react";
import { Link } from "react-router-dom";
import { BsGearFill, BsTrashFill } from "react-icons/bs";
import AuthLayouts from "../layouts/AuthLayouts.jsx";

const KelasList = () => {

  return (
    <AuthLayouts name={"Kelas"}>
      <div className="columns mt-5 is-mobile is-centered">
        <div className="column is-four-fifths">
        <div className=" box">
            <div className="columns">
              <div className="column">
          <Link
            to="/kelas/add"
            className="button is-success"
          >
            Tambah Kelas
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
                <th>NAMA KELAS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>VII A</td>
                  <td>
                    <Link to={`edit`} className="button is-info is-small mr-3">
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
                  <td>VII B</td>
                  <td>
                    <Link to={`edit`} className="button is-info is-small mr-3">
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
                  <td>VII B</td>
                  <td>
                    <Link to={`edit`} className="button is-info is-small mr-3">
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
                  <td>VII C</td>
                  <td>
                    <Link to={`edit`} className="button is-info is-small mr-3">
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
                  <td>VIII A</td>
                  <td>
                    <Link to={`edit`} className="button is-info is-small mr-3">
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

export default KelasList;
