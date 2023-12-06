<template>
<div class="loader-container" v-if="loading">
    <div class="lds-dual-ring"></div>
  </div>
<Header /> 
<breadcrumb title="A propos de nous" :image="bgFormation"/>
 <!-- Breadcrumb Ends -->
    <!-- Main Container Starts -->
    <div class="container px-md-0">
      <!-- About Intro Text Starts -->
      <section
        class="welcome-area about"
        :style="{ backgroundImage: 'url(' + about + ')', backgroundPosition:'right bottom', backgroundRepeat:'no-repeat'}"
       
      >
        <div class="row">
          <div class="col-lg-6 col-sm-12 about-col">
            <h3 class="main-heading1">Welcome to School</h3>
            <h3 class="main-heading2">Best Education Mangment Systems</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              volutpat rutrum eros amet sollicitudin interdum. Suspendisse
              pulvinar, velit nec pharetra interdum, ante tellus ornare mi, et
              mollis tellus neque vitae elit. Mauris adipiscing mauris fringilla
              turpis interdum sed pulvinar nisi malesuada. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <p>
              Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
              Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
              posuere erat a ante venenatis dapibus posuere velit aliquet. Duis
              mollis, est non commodo luctus, nisi erat porttitor ligula. Mauris
              sit amet neque nec nunc gravida.
            </p>
            <div class="row">
              <div class="col-sm-6 col-12">
                <ul class="list-unstyled list-style-3">
                  <li><a href="#">Cardiothoracic Surgery</a></li>
                  <li><a href="#">Cardiovascular Diseases</a></li>
                  <li><a href="#">Ophthalmology</a></li>
                  <li><a href="#">Dermitology</a></li>
                </ul>
              </div>
              <div class="col-sm-6 col-12">
                <ul class="list-unstyled list-style-3">
                  <li><a href="#">Cardiothoracic Surgery</a></li>
                  <li><a href="#">Cardiovascular Diseases</a></li>
                  <li><a href="#">Ophthalmology</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 d-none d-md-block"></div>
        </div>
      </section>
      <!-- About Intro Text Ends -->
    </div>
    <!-- Main Container Ends -->
    <!-- About Featured Section Starts -->
    <section
      class="about-featured parallax"
      :style="{ backgroundImage: 'url(' + paralax + ')'}"
      
    >
      <div class="container px-md-0">
        <h3 class="lite">Get Well Soon</h3>
        <h2 class="lite">Our Best <span>Services</span></h2>
        <ul class="list-unstyled list row">
          <li class="col-lg-4 col-md-6 col-sm-12">
            <i class="fas fa-headphones"></i>
            <h4>Online Course Facilities</h4>
            <p>
              Making it look like readable English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text.
            </p>
          </li>
          <li class="col-lg-4 col-md-6 col-sm-12">
            <i class="fas fa-book-open"></i>
            <h4>Modern Book Library</h4>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover.
            </p>
          </li>
          <li class="col-lg-4 col-md-6 col-sm-12">
            <i class="fas fa-industry"></i>
            <h4>Be Industrial Leader</h4>
            <p>
              Making it look like readable English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model.
            </p>
          </li>
          <li class="col-lg-4 col-md-6 col-sm-12">
            <i class="fas fa-code"></i>
            <h4>Programming Courses</h4>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will.
            </p>
          </li>
          <li class="col-lg-4 col-md-6 col-sm-12">
            <i class="fas fa-language"></i>
            <h4>Foreign Languages</h4>
            <p>
              Making it look like readable English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover.
            </p>
          </li>
          <li class="col-lg-4 col-md-6 col-sm-12">
            <i class="fas fa-user-graduate"></i>
            <h4>Alumni Directory</h4>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a for 'lorem ipsum'
              will uncover.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <!-- About Featured Section Ends -->
    <!-- Footer Top Bar Starts -->
    <section class="footer-top-bar">
      <div class="container px-md-0 clearfix text-center-sm text-center-xs">
        <h3 class="float-left">Prenez contact avec nous pour rejoindre notre Université</h3>
        <router-link to="/contact-us" class="btn btn-black text-uppercase float-right">
         Contacter nos bureaux
        </router-link>
      </div>
    </section>
    <!-- Footer Top Bar Ends -->
<Footer />
</template>

<script>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import breadcrumb from "@/layouts/breadcrumb.vue";
import bgFormation from "@/uploads/frontend/banners/about1.jpg";
import paralax from "@/uploads/frontend/about/service_parallax1.jpg"
import about from "@/uploads/frontend/about/about1.png"
export default {
  name: "AboutView",
  data() {
    return {
        bgFormation: bgFormation,
        paralax: paralax,
        about: about,
        loading:true    ,
    };
  },
    components: { Header, Footer, breadcrumb },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000)
  },
};
</script>
