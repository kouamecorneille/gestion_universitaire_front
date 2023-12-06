<template>
<div class="loader-container" v-if="loading">
    <div class="lds-dual-ring"></div>
  </div>
<Header /> 
<breadcrumb title="Nos Formations" :image="bgFormation"/>
<Footer />
</template>

<script>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import breadcrumb from "@/layouts/breadcrumb.vue";
import bgFormation from "@/uploads/frontend/banners/teachers1.jpg";
export default {
  name: "FormationView",
  data() {
    return {
        bgFormation:bgFormation,
        loading:true
    };
  },
  components: { Header, Footer,breadcrumb },
  mounted(){
    setTimeout(() => {
      this.loading = false;
    }, 3000)
  }
};
</script>
