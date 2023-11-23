<template>
  <!-- Header Starts -->
  <header class="main-header">
    <!-- Nested Container Starts -->
    <!-- Top Bar Starts -->
    <div class="top-bar d-none d-md-block">
      <div class="container px-md-0">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <span>Horaires : </span>  du lundi au vendredi - 06h00 - 17h30, dimanche fermé
          </div>
          <div class="col-md-6 col-sm-12">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a href="mailto: info@uta.ci">
                  <i class="far fa-envelope"></i>  info@uta.ci
                </a>
              </li>
              <li class="list-inline-item">
                <i class="fas fa-phone-volume"></i> +225 07 57 04 37 59
              </li>
              <li class="list-inline-item">
                <router-link to="/auth/login"
                  ><i class="fas fa-user-lock"></i> Connexion</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Top Bar Ends -->
    <!-- Navbar Starts -->
    <div class="stricky" id="strickyMenu" style="background-color: #fff">
      <div class="container-md px-md-0">
        <nav id="nav" class="navbar navbar-expand-lg" role="navigation">
          <div class="container-md px-md-0">
            <!-- Logo Starts -->
            <router-link to="/" class="navbar-brand" >
              <img src="../uploads/app_image/UTA.jpeg" alt="Logo" style="height:50px!important;"/>
            </router-link>
            <!-- Logo Ends -->
            <!-- Collapse Button Starts -->
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fa fa-bars"></span>
            </button>
            <!-- Collapse Button Ends -->
            <!-- Navbar Collapse Starts -->
            <div id="mainNav" class="navbar-collapse collapse">
              <ul class="nav navbar-nav ml-auto navbar-style3">
                <li class="nav-item"  :class="{ 'nav-item active': isActive('/') }">
                  <router-link to="/" class="nav-link">Accueil </router-link>
                </li>
                <li class="nav-item" :class="{ 'nav-item active': isActive('/formations') }">
                  <router-link to="/formations" class="nav-link">Nos formations </router-link>
                </li>
                <li class="nav-item" :class="{ 'nav-item active': isActive('/evenements') }">
                  <router-link to="/evenements" class="nav-link">Evènéments </router-link>
                </li>
                <li class="nav-item" :class="{ 'nav-item active': isActive('/admission-uta') }">
                  <router-link to="/admission-uta" class="nav-link"
                    >Admission 
                  </router-link>
                </li>
                <li class="nav-item" :class="{ 'nav-item active': isActive('/gallery-uta') }">
                  <router-link to="/gallery-uta" class="nav-link"
                    >Gallerie
                  </router-link>
                </li>
                <li class="nav-item" :class="{ 'nav-item active': isActive('/faq-uta') }">
                  <router-link to="/faq-uta" class="nav-link"
                    >FAQ 
                  </router-link>
                </li>
                <li class="nav-item" :class="{ 'nav-item active': isActive('/about-us') }">
                  <router-link to="/about-us" class="nav-link">A propos </router-link>
                </li>
                <li class="nav-item" :class="{ 'nav-item active': isActive('/contact-us') }">
                  <router-link to="/contact-us" class="nav-link">Contactez-nous </router-link>
                </li>
                <li class="nav-item m-login">
                  <router-link
                    to="/auth/login"
                    class="btn d-grid btn-black mt-sm"
                    >Connexion
                  </router-link>
                </li>
              </ul>
            </div>
            <!-- Navbar Collapse Ends -->
          </div>
        </nav>
      </div>
    </div>
    <!-- Navbar Ends -->
  </header>
  <!-- Header Ends -->
</template>
<script>
export default {
  name:"HeaderView",
  data() {
    return {
      
    }
  },
  methods: {
    isActive(routeName) {
      return this.$route.path === routeName;
    },
  },
  mounted() {
    
  },
};
</script>
