import React from "react";
import AuthLayouts from "../layouts/AuthLayouts.jsx";

const AddAbsensi = () => {
 
  return (
    <AuthLayouts name={"Absensi"} >
        <div className="columns mt-5 is-mobile is-centered">
          <div className="column is-four-fifths ">
          <p class="title has-text-centered">ABSENSI SISWA</p>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div className="field">
                    <label className="label">KELAS</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select
                        >
                          <option value="">VII A</option>
                          <option value="">VII B</option>
                          <option value="">VII C</option>
                          <option value="">VII D</option>
                          <option value="">VIII A</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">TANGGAL</label>
                    <div className="control">
                      <input
                        dateFormat="YYYY-MM-DD"
                        timeFormat="HH:mm"
                        type="datetime-local"
                        className="input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div className="field">
                    <label className="label">MATA PELAJARAN</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select>
                          <option value="">Bahasa Indonesia</option>
                          <option value="">Bahasa Inggris</option>
                          <option value="">IPS</option>
                          <option value="">IPA</option>
                          <option value="">MATEMATIKA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">KETERANGAN</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        placeholder="keterangan"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box mt-1 table-container">
                <table className="table is-striped is-fullwidth">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Nama</th>
                      <th>Keterangan</th>
                      <th>H </th>
                      <th> I </th>
                      <th> S </th>
                      <th> A</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>1</td>
                        <td>Bagus Wicaksono</td>
                        <td>
                          <div className="control">
                            <input
                              type="text"
                              className="input"
                              name="keterangan"
                              placeholder="keterangan"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 1"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Bunga Lestari</td>
                        <td>
                          <div className="control">
                            <input
                              type="text"
                              className="input"
                              placeholder="keterangan"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 2"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sabrina Rahayu</td>
                        <td>
                          <div className="control">
                            <input
                              type="text"
                              className="input"
                              placeholder="keterangan"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="control">
                            <input
                              className="mr-1"
                              type="radio"
                              name="status 3"
                            />
                          </div>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    className="button is-success mr-5"
                  >
                    Save
                  </button>
                  <a
                    href="/absensi"
                    className="button"
                  >
                    Cancel
                  </a>
                </div>
              </div>
          </div>
        </div>
    </AuthLayouts>
  );
};

export default AddAbsensi;
