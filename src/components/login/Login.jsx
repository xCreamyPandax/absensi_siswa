import React from "react";

const Login = () => {
  return (
<section class="hero is-fullheight is-fullwidth">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-widescreen">
        <div className="columns is-centered mb-5">
          <div className="column">
          <p className="has-text-weight-bold is-size-4 has-text-centered">UPT SMP NEGERI 3 SRENGAT</p>
          </div>
            </div>
          <form action="" class="box" >
            <div class="field">
              <label for="" class="label">NIP</label>
              <div class="control">
                <input type="number" class="input" required />
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control">
                <input type="password" placeholder="*******" class="input" required />
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox"/>
               Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-success" >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Login;
