<template>
<!-- Main Banner Starts -->
<div class="main-banner" :style="{ backgroundImage: 'url(' + image + ')', backgroundPosition: 'center top' }">
    <div class="container px-md-0">
        <h2><span>{{ title }}</span></h2>
    </div>
</div>
<!-- Main Banner Ends -->
<!-- Breadcrumb Starts -->
<div class="breadcrumb">
    <div class="container px-md-0">
        <ul class="list-unstyled list-inline">
            <li class="list-inline-item"><router-link to="/">Acceuil</router-link></li>
            <li class="list-inline-item active">{{ title }}</li>
        </ul>
    </div>
</div>
<!-- Breadcrumb Ends -->
<!-- Main Container Starts -->
    
</template>

<script>
export default {
    name:"breadcrumbView",
    data:function () {
        return {

        };
    },
    props:{
        title:String,
        image:String
    }
}
</script>