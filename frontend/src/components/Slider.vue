<template>
  <section class="main-slider">
    <div class="container-fluid">
      <ul class="main-slider-carousel owl-carousel owl-theme slide-nav">
        <li class="slider-wrapper">
          <div
            class="image"
            :style="{ backgroundImage: 'url(' + Banner1 + ')' }"
          ></div>
          <div class="slider-caption c-left">
            <div class="container">
              <div class="wrap-caption">
                <h1>Bienvenue à <span>UTA</span></h1>
                <div class="text center">
                  Lorem Ipsum is simply dummy text printer took a galley of type and
                  scrambled it to make a type specimen book.
                </div>
                <div class="link-btn">
                  <a href="#" class="btn"> Nos Services </a>
                  <a href="#" class="btn btn1">Voir plus </a>
                </div>
              </div>
            </div>
          </div>
          <div class="slide-overlay"></div>
        </li>
        <li class="slider-wrapper">
          <div
            class="image"
            :style="{ backgroundImage: 'url(' + Banner2 + ')' }"
          ></div>
          <div class="slider-caption c-left">
            <div class="container">
              <div class="wrap-caption">
                <h1>Online <span>Live Class</span> Facility</h1>
                <div class="text center">
                  Lorem Ipsum is simply dummy text printer took a galley of type and
                  scrambled it to make a type specimen book.
                </div>
                <div class="link-btn">
                  <a href="#" class="btn"> Voir plus </a>
                  <a href="#" class="btn btn1"> Commencer ! </a>
                </div>
              </div>
            </div>
          </div>
          <div class="slide-overlay"></div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import Banner1 from "../uploads/frontend/slider/home-slider-1592582779.jpg";
import Banner2 from "../uploads/frontend/slider/home-slider-1592582805.jpg";
import $ from "jquery";
export default {
  name: "SliderView",
  data() {
    return {
      Banner1: Banner1,
      Banner2: Banner2
    };
  },

  mounted() {
    // Main Slider Carousel
    if ($(".main-slider-carousel").length) {
      $(".owl-carousel").on("translate.owl.carousel", function () {
        $(".slider-text span").removeClass("animated fadeInDown").css("opacity", "0");
        $(".slider-text h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
        $(".slider-text a").removeClass("animated fadeInUp").css("opacity", "0");
      });

      $(".owl-carousel").on("translated.owl.carousel", function () {
        $(".slider-text span").addClass("animated fadeInDown").css("opacity", "1");
        $(".slider-text h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
        $(".slider-text a").addClass("animated fadeInUp").css("opacity", "1");
      });

      $(".main-slider-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        animateOut: "slideOutDown",
        animateIn: "fadeInLeft",
        active: true,
        smartSpeed: 1000,
        autoplay: 5000,
        dots: false,
        navText: [
          '<span class="fas fa-arrow-left"></span>',
          '<span class="fas fa-arrow-right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1200: {
            items: 1,
          },
        },
      });
    }
  },
};
</script>
<style></style>
