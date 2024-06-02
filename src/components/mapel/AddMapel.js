import React from "react";

const AddMapel = () => {
  return (
    <section class="hero is-small">
      <div class="hero-body has-text-centered">
        <p class="title">Tambah Data Mata Pelajaran</p>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <form >
            <div class="field is-horizontal">
              <div class="field-body">
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
              <div className="control">
                <button
                  type="submit"
                  className="button is-success mr-5"
                >
                  Save
                </button>
                <a
                  href="/mapel"
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

export default AddMapel;
