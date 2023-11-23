<template>

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
        bgFormation:bgFormation
    };
  },
  components: { Header, Footer,breadcrumb },
};
</script>
