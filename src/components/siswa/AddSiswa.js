import React from "react";

const AddSiswa = () => {
  return (
    <section class="hero is-small">
      <div class="hero-body has-text-centered">
        <p class="title">Tambah Data Siswa</p>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <form>
            <div class="field is-horizontal">
              <div class="field-body">
                <div className="field">
                  <label className="label">NISN</label>
                  <div className="control">
                    <input
                      type="number"
                      className="input"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Nama</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <textarea
                  type="text"
                  className="input textarea"
                  placeholder="Alamat"
                ></textarea>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div className="field">
                  <label className="label">Tempat Lahir</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Tempat Lahir"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Tanggal Lahir</label>
                  <div className="control">
                    <input
                      type="date"
                      className="input"
                      placeholder="Tanggal Lahir"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Kelas</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                      <option>VII A</option>
                      <option>VII B</option>
                      <option>VII C</option>
                      <option>VII D</option>
                      <option>VIII A</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  type="submit"
                  className="button is-success mr-5"
                >
                  Save
                </button>
                <a
                  href="/siswa"
                  className="button"
                >
                  Cancel
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddSiswa;
