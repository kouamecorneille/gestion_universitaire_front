<template>
  
  <div class="loader-container" v-if="loading">
    <div class="lds-dual-ring"></div>
  </div>
  <!-- slider component -->
  <HeaderView />
  <!-- slider component -->
  <SliderView />
  <!-- slider component -->
  <div class="container px-md-0 main-container">
    <!-- Features Section Starts -->
    <div class="notification-boxes row">
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="box hover-border-outer hover-border">
          <div class="icon"><i class="fas fa-video"></i></div>
          <h4>Online Classes</h4>
          <p>
            Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat
            condimentum velit class aptent taciti sociosqu.
          </p>
          <a href="#" class="btn btn-transparent"> Read More </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="box hover-border-outer hover-border">
          <div class="icon"><i class="fas fa-graduation-cap"></i></div>
          <h4>Scholarship</h4>
          <p>
            Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat
            condimentum velit class aptent taciti sociosqu.
          </p>
          <a href="#" class="btn btn-transparent"> Read More </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="box hover-border-outer hover-border">
          <div class="icon"><i class="fas fa-book-reader"></i></div>
          <h4>Books & Liberary</h4>
          <p>
            Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat
            condimentum velit class aptent taciti sociosqu.
          </p>
          <a href="#" class="btn btn-transparent"> Read More </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="box hover-border-outer hover-border">
          <div class="icon"><i class="fab fa-discourse"></i></div>
          <h4>Trending Courses</h4>
          <p>
            Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat
            condimentum velit class aptent taciti sociosqu.
          </p>
          <a href="#" class="btn btn-transparent"> Read More </a>
        </div>
      </div>
    </div>
    <!-- Welcome Section Starts -->
    <section class="welcome-area">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <h2 class="main-heading1 lite" style="color: #000">Welcome To Education</h2>
          <div class="sec-title style-two mb-tt">
            <h2 class="main-heading2">We will give you future</h2>
            <span class="decor"><span class="inner"></span></span>
          </div>
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed to using
          content.<br />
          <br />
          Making it look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a search for
          'lorem ipsum' will uncover many web sites still in their infancy. Various
          versions have evolved over the years, sometimes by accident, sometimes on
          purpose (injected humour and the like).
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="wel-img">
            <img
              src="../../uploads/frontend/home_page/wellcome1.png"
              alt="image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Testimonial Section Starts -->
  <!-- Statistics Section Starts -->
  <section
    class="counters-wrapper"
    :style="{ backgroundImage: 'url(' + paralax + ')' }"
   
  >
    <div class="container px-md-0">
      <div class="sec-title text-center">
        <h2 style="color: #fff">20 years experience in the field of study</h2>
        <p style="color: #fff">
          Lorem Ipsum is simply dummy text printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <span class="decor"><span class="inner"></span></span>
      </div>
      <div class="row">
        <!-- widget count item -->
        <div class="col-lg-3 col-sm-6 col-xs-6 text-center">
          <div class="counters-item">
            <i class="fas fa-user-tie"></i>
            <div style="color: #fff">
              <span class="counter" data-count="4">0</span>
            </div>
            <h3 style="color: #fff">Certified Teachers</h3>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-6 text-center">
          <div class="counters-item">
            <i class="fas fa-user-graduate"></i>
            <div style="color: #fff">
              <span class="counter" data-count="8">0</span>
            </div>
            <h3 style="color: #fff">Students Enrolled</h3>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-6 text-center">
          <div class="counters-item">
            <i class="far fa-file-video"></i>
            <div style="color: #fff">
              <span class="counter" data-count="7">0</span>
            </div>
            <h3 style="color: #fff">Live Classes</h3>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-6 text-center">
          <div class="counters-item">
            <i class="fas fa-school"></i>
            <div style="color: #fff">
              <span class="counter" data-count="2">0</span>
            </div>
            <h3 style="color: #fff">Branch</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Services Section Starts -->
  <div
    class=""
    :style="{ backgroundImage: 'url(' + Bg + ')' }"
  >
    <div class="container px-md-0 mt-2">
      <section class="medical-services">
        <div class="sec-title text-center">
          <h2 style="color: #000">POURQUOI NOUS CHOISIR ?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <span class="decor"><span class="inner"></span></span>
        </div>
        <ul class="list-unstyled row text-center">
          <li class="col-lg-2 col-sm-4">
            <div class="icon">
              <div class="i-hover"><i class="fas fa-headphones"></i></div>
            </div>
            <h5>Online Course Facilities</h5>
            <p>Making it look like readable E...</p>
          </li>
          <li class="col-lg-2 col-sm-4">
            <div class="icon">
              <div class="i-hover"><i class="fas fa-book-open"></i></div>
            </div>
            <h5>Modern Book Library</h5>
            <p>Many desktop publishing packag...</p>
          </li>
          <li class="col-lg-2 col-sm-4">
            <div class="icon">
              <div class="i-hover"><i class="fas fa-industry"></i></div>
            </div>
            <h5>Be Industrial Leader</h5>
            <p>Making it look like readable E...</p>
          </li>
          <li class="col-lg-2 col-sm-4">
            <div class="icon">
              <div class="i-hover"><i class="fas fa-code"></i></div>
            </div>
            <h5>Programming Courses</h5>
            <p>Many desktop publishing packag...</p>
          </li>
          <li class="col-lg-2 col-sm-4">
            <div class="icon">
              <div class="i-hover"><i class="fas fa-language"></i></div>
            </div>
            <h5>Foreign Languages</h5>
            <p>Making it look like readable E...</p>
          </li>
          <li class="col-lg-2 col-sm-4">
            <div class="icon">
              <div class="i-hover"><i class="fas fa-user-graduate"></i></div>
            </div>
            <h5>Alumni Directory</h5>
            <p>Many desktop publishing packag...</p>
          </li>
        </ul>
      </section>
      <div class="book-appointment-box" style="background-color: #464646">
        <div class="row">
          <div class="col-lg-8 col-md-12 text-center text-lg-left">
            <h4 style="color: #fff">Postuler via une demande une ligne</h4>
            <h3 style="color: #fff">
              <div class="inner-box"><i class="fa fa-phone"></i></div>
              +225 07 57 04 37 59
            </h3>
          </div>
          <div class="col-lg-4 col-md-12 text-center text-lg-left">
            <a href="#" class="btn btn-main btn-1 text-uppercase">Postuler maintenant</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <whatsappComponent />
  <FooterView />
</template>
<script>
import HeaderView from "../../layouts/Header.vue";
import FooterView from "../../layouts/Footer.vue";
import SliderView from "../../components/Slider.vue";
import whatsappComponent from "../../components/whatsappComponent.vue";
import Bg from "../../../public/assets/frontend/images/14.png"
import paralax from "@/uploads/frontend/home_page/counter-parallax1.jpg"
import "owl.carousel";

export default {
  name: "HomeView",
  data() {
    return {
      Bg: Bg,
      paralax:paralax,
      loading:true,
    };
  },
  components: { HeaderView, FooterView, SliderView, whatsappComponent },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000)
  },
};
</script>
