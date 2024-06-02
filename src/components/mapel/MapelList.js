import React from "react";
import { Link } from "react-router-dom";
import { BsGearFill, BsTrashFill } from "react-icons/bs";
import AuthLayouts from "../layouts/AuthLayouts.jsx";

const MapelList = () => {
  return (
    <AuthLayouts name={"Mapel"}>
      <div className="columns mt-5 is-mobile is-centered">
        <div className="column is-four-fifths">
        <div className=" box">
            <div className="columns">
              <div className="column">
          <Link
            to="/mapel/add"
            className="button is-success"
          >
            Tambah Mapel
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
                <th>NAMA</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>Bahasa Indonesia</td>
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
                  <td>Bahasa Inggris</td>
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
                </tr><tr>
                  <td>3</td>
                  <td>IPA</td>
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
                </tr><tr>
                  <td>4</td>
                  <td>IPA</td>
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
                </tr><tr>
                  <td>5</td>
                  <td>MATEMATIKA</td>
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

export default MapelList;
