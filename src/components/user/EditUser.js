import React from "react";

const EditUser = () => {
  return (
    <section className="hero is-small">
      <div className="hero-body has-text-centered">
        <p className="title">Edit Data User</p>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <form >
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <label className="label">NIP</label>
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
                />
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-body">
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
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Role</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                  >
                    <option value="admin">admin</option>
                    <option value="guru">guru</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success mr-5">
                  Update
                </button>
                <a href="/user" className="button">
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

export default EditUser;
