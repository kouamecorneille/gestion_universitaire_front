<template>
  <div class="auth-main">
    <div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner py-4">
          <!-- Login -->
          <div class="card">
            <div class="card-body">
              <h4 class="mb-1 pt-2 text-center">Welcome to UTA! 👋</h4>
              <p class="mb-4">
                Connectez-vous à votre compte et commencez l'aventure 
              </p>
              <form
                id="formAuthentication"
                class="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
                novalidate="novalidate"
              >
                <div class="mb-3 fv-plugins-icon-container">
                  <label for="email" class="form-label"
                    >Email</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Entrer votre adresse email"
                    autofocus="on"
                  />
                  <div
                    class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
                  ></div>
                </div>
                <div
                  class="mb-3 form-password-toggle fv-plugins-icon-container fv-plugins-bootstrap5-row-valid"
                >
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">Mot de passe</label>
                    <a href="auth-forgot-password-basic.html">
                      <small>Mot de passe oublié?</small>
                    </a>
                  </div>
                  <div class="input-group input-group-merge has-validation">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      name="password"
                      placeholder="············"
                      aria-describedby="password"
                    />
                    <span class="input-group-text cursor-pointer"
                      ><i class="ti ti-eye-off"></i
                    ></span>
                  </div>
                  <div
                    class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
                  ></div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label class="form-check-label" for="remember-me">
                      Se souvenir de moi
                    </label>
                  </div>
                </div>
                <div class="mb-3">
                  <button
                    class="btn btn-primary d-grid w-100 waves-effect waves-light"
                    type="submit"
                  >
                    Se connecter
                  </button>
                </div>
                <input type="hidden" />
              </form>
            </div>
          </div>
          <!-- /Register -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LogoUTA from "@/uploads/app_image/UTA.jpeg";
import $ from "jquery";
import "jquery-backstretch";
import slider_1 from "@/uploads/login_page/image/slider_1.jpg";
import slider_2 from "@/uploads/login_page/image/slider_2.jpg";
import slider_3 from "@/uploads/login_page/image/slider_3.jpg";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      logo: LogoUTA,
      slider_1: slider_1,
      slider_2: slider_2,
      slider_3: slider_3,
    };
  },
  methods: {},
  mounted() {
    $(".auth-main").backstretch([slider_1, slider_2, slider_3], {
      duration: 5000,
      fade: 750,
    });
  },
};
</script>
<style>
@import "@/uploads/login_page/css/style.css";
@import "../../../public/assets/frontend/css/bootstrap.min.css";
@import "./css/index.min.css";
@import "./css/wave.css";
</style>
