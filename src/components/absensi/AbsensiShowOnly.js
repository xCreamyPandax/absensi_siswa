import React from "react";

const AbsensiShowOnly = () => {
  return (
    <section class="hero is-small">
      <div class="hero-body has-text-centered">
        <p class="title">Absensi</p>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <form>
            <div class="field is-horizontal">
              <div class="field-body">
                <div className="field">
                  <label className="label">KELAS</label>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        disabled="true"
                      >
                        <option value="">VII A</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">TANGGAL</label>
                  <div className="control">
                    <input
                      type="text"
                      disabled="true"
                      className="input is-desible"
                      value="Senin, 27 Mei 2024 07:30"
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
                      <select disabled="true"
                      >
                        <option value="">Bahasa Indonesia</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">KETERANGAN</label>
                  <div className="control">
                    <input
                      type="text" disabled="true"
                      className="input"
                      value="Cipta baca puisi"
                      placeholder="keterangan"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <table className="table is-striped is-fullwidth mt-5">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Keterangan</th>
                    <th>STATUS </th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <th>1</th>
                      <th>Agus Efendi</th>
                      <th>
                        
                      </th>
                      <th>
                        Hadir
                      </th>
                    </tr>
                    <tr>
                      <th>2</th>
                      <th>Bima Ardana Putra</th>
                      <th>
                        
                      </th>
                      <th>
                        Hadir
                      </th>
                    </tr>
                    <tr>
                      <th>3</th>
                      <th>Muhammad Bagus Irawan</th>
                      <th>
                        
                      </th>
                      <th>
                        Hadir
                      </th>
                    </tr>
                    <tr>
                      <th>4</th>
                      <th>Salsabila Putri</th>
                      <th>
                        
                      </th>
                      <th>
                        Hadir
                      </th>
                    </tr>
                    <tr>
                      <th>5</th>
                      <th>Wahyuning Agunge Samudro</th>
                      <th>
                        Acara Keluarga
                      </th>
                      <th>
                        Izin
                      </th>
                    </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AbsensiShowOnly;
