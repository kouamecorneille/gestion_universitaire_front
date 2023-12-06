<template>
<div class="loader-container" v-if="loading">
    <div class="lds-dual-ring"></div>
  </div>
<Header /> 
<breadcrumb title="Galleries" :image="bgFormation"/>
 <div class="container px-md-0 main-container">
    <h2 class="main-heading2 nomargin-top">Gallerie de notre Université</h2>
    <div class="gallery-grid text-center">
    <div class="row">
        <!-- Gallery Image #1 Starts -->
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="hover-content">
                <img
                src="../../uploads/frontend/gallery/defualt.png"
                alt="Gallery Image"
                class="img-fluid"
                />
                <div class="overlay">
                <a
                    href="../../uploads/frontend/gallery/defualt.png"
                    class="btn btn-1 zoom"
                    ><i class="fa fa-image"></i
                ></a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="hover-content">
                <img
                src="../../uploads/frontend/gallery/album-1619151850.jpg"
                alt="Gallery Image"
                class="img-fluid"
                />
                <div class="overlay">
                <a
                    href="../../uploads/frontend/gallery/album-1619151850.jpg"
                    class="btn btn-1 zoom"
                    ><i class="fa fa-image"></i
                ></a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="hover-content">
                <img
                src="../../uploads/frontend/gallery/album-1619151850.jpg"
                alt="Gallery Image"
                class="img-fluid"
                />
                <div class="overlay">
                <a
                    href="../../uploads/frontend/gallery/album-1619151850.jpg"
                    class="btn btn-1 zoom"
                    ><i class="fa fa-image"></i
                ></a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="hover-content">
                <img
                src="../../uploads/frontend/gallery/album-1619151850.jpg"
                alt="Gallery Image"
                class="img-fluid"
                />
                <div class="overlay">
                <a
                    href="../../uploads/frontend/gallery/album-1619151850.jpg"
                    class="btn btn-1 zoom"
                    ><i class="fa fa-image"></i
                ></a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="hover-content">
            <img
            src="../../uploads/frontend/gallery/album-1619151862.jpg"
            alt="Gallery Image"
            class="img-fluid"
            />
            <div class="overlay">
            <a
                href="../../uploads/frontend/gallery/album-1619151862.jpg"
                class="btn btn-1 zoom"
                ><i class="fa fa-image"></i
            ></a>
            </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="hover-content">
            <img
            src="../../uploads/frontend/gallery/album-1619151862.jpg"
            alt="Gallery Image"
            class="img-fluid"
            />
            <div class="overlay">
            <a
                href="../../uploads/frontend/gallery/album-1619151862.jpg"
                class="btn btn-1 zoom"
                ><i class="fa fa-image"></i
            ></a>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
<Footer />
</template>

<script>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import breadcrumb from "@/layouts/breadcrumb.vue";
import bgFormation from "@/uploads/frontend/banners/gallery1.jpg";
export default {
  name: "FormationView",
  data() {
    return {
        bgFormation:bgFormation,
        loading:true,
    };
  },
  components: { Header, Footer,breadcrumb },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000)
  }
};
</script>
