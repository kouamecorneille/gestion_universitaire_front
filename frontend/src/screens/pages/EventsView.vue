<template>

<Header /> 
<breadcrumb title="Nos Evènements" :image="bgFormation"/>
 <div class="container px-md-0 main-container">
        <div class="container gallery-album px-md-0 main-container">
            <h3 class="main-heading2">Événements à venir</h3>
            <ul id="doctors-grid" class="row grid">
                <li class="doctors-grid col-lg-4 col-md-6" data-groups='["all", "1"]'>
                <div class="bio-box">
                    <div class="gallery-album-item">
                    <div class="gallery-album-img">
                        <img
                        :src="gallery"
                        alt="Image"
                        />
                    </div>
                    <div class="gallery-album-title">
                        <h3>Celebration</h3>
                        <a class="btn" href="gallery/gallery_view/celebration.html"
                        ><i class="fas fa-photo-video"></i
                        ></a>
                    </div>
                    <div class="gallery-album-meta">
                        <p>By<a href="">Jennifer Adams</a></p>
                    </div>
                    <div class="gallery-album-text">
                        <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                        mi.Lorem ipsum dolor .
                        </p>
                    </div>
                    </div>
                </div>
                </li>
                <li class="doctors-grid col-lg-4 col-md-6" data-groups='["all", "2"]'>
                <div class="bio-box">
                    <div class="gallery-album-item">
                    <div class="gallery-album-img">
                        <img
                        :src="gallery"
                        alt="Image"
                        />
                    </div>
                    <div class="gallery-album-title">
                        <h3>Pre Primary</h3>
                        <a class="btn" href="gallery/gallery_view/pre-primary.html"
                        ><i class="fas fa-photo-video"></i
                        ></a>
                    </div>
                    <div class="gallery-album-meta">
                        <p>By<a href="">Jennifer Adams</a></p>
                    </div>
                    <div class="gallery-album-text">
                        <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                        mi.Lorem ipsum dolor .
                        </p>
                    </div>
                    </div>
                </div>
                </li>
                <li class="doctors-grid col-lg-4 col-md-6" data-groups='["all", "2"]'>
                <div class="bio-box">
                    <div class="gallery-album-item">
                    <div class="gallery-album-img">
                        <img :src="gallery" alt="Image" />
                    </div>
                    <div class="gallery-album-title">
                        <h3>Recreation Centre</h3>
                        <a
                        class="btn"
                        href="gallery/gallery_view/recreation-centre.html"
                        ><i class="fas fa-photo-video"></i
                        ></a>
                    </div>
                    <div class="gallery-album-meta">
                        <p>By<a href="">Jennifer Adams</a></p>
                    </div>
                    <div class="gallery-album-text">
                        <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                        mi.Lorem ipsum dolor .
                        </p>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
        </div>
</div>
<Footer />
</template>

<script>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import breadcrumb from "@/layouts/breadcrumb.vue";
import bgFormation from "@/uploads/frontend/banners/events1.jpg";
import gallery from "@/uploads/frontend/gallery/gallery-1619150843.jpg"
export default {
  name: "EventsView",
  data() {
    return {
        bgFormation:bgFormation,
        gallery:gallery
    };
  },
  components: { Header, Footer,breadcrumb },
};
</script>
