<template>
    <Header />
    <breadcrumbVue  title="Contactez-nous" :image="bgContact"/>
    <div class="container px-md-0 main-container">
      <div class="contact-content">
        <!-- Nested Row Starts -->
        <div class="row">
          <!-- Contact Form Starts -->
          <div class="col-md-8 col-sm-12">
            <h3>Prenez contact avec nous en remplissant le formulaire ci-dessous</h3>
            <form
              action="https://iconschool.ramomcoder.com/contact"
              class="form-horizontal contact-form"
              method="post"
              accept-charset="utf-8"
            >
              
              <div class="row">
                <!-- Name Field Starts -->
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name"
                      >Nom <span class="required">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      value=""
                    />
                    <span class="text-danger"></span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="email"
                      >Email <span class="required">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      id="email"
                      value=""
                    />
                    <span class="text-danger"></span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="phoneno"
                      >Numéro <span class="required">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="phoneno"
                      id="phoneno"
                      value=""
                    />
                    <span class="text-danger"></span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="subject"
                      >Sujet <span class="required">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      value=""
                    />
                    <span class="text-danger"></span>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="message"
                      >Message <span class="required">*</span></label
                    >
                    <textarea
                      class="form-control"
                      rows="8"
                      name="message"
                      id="message"
                    ></textarea>
                    <span class="text-danger"></span>
                  </div>
                </div>
                <!-- Message Field Ends -->
                <div class="col-sm-12">
                  <button
                    type="submit"
                    name="new_patient"
                    value="1"
                    class="btn btn-black"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="w-100 d-block d-md-none">
            <p>&nbsp;</p>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="cblock-1">
              <span class="icon-wrap"
                ><i class="fas fa-map-marker-alt"></i
              ></span>
              <h4>Address</h4>
              <p>
                4896 Romrog Way, LOS ANGELES,<br />
                California
              </p>
            </div>

            <div class="cblock-1">
              <span class="icon-wrap"><i class="fas fa-phone"></i></span>
              <h4>Phone</h4>
              <p>
                954-648-1802, <br />
                963-612-1782
              </p>
            </div>
            <div class="cblock-1">
              <span class="icon-wrap"><i class="far fa-envelope"></i></span>
              <h4>Email</h4>
              <p>
                info@example.com<br />
                support@example.com
              </p>
            </div>
          </div>
          <!-- Address Ends -->
        </div>
         <!-- <div class="map">
      <iframe
        width="100%"
        height="350"
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.3833161665298!2d-118.03745848530627!3d33.85401093559897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2c6c97f8f3ed%3A0x47b1bde165dcc056!2sOak+Dr%2C+La+Palma%2C+CA+90623%2C+USA!5e0!3m2!1sen!2sbd!4v1544238752504"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div> -->
        <!-- Nested Row Ends -->
      </div>
      <!-- Contact Content Ends -->
    </div>
    <!--Map Start-->
   
    <!--Map End-->
    <FooterVue />
</template>
<script>
import breadcrumbVue from '@/layouts/breadcrumb.vue';
import Header from '@/layouts/Header.vue';
import FooterVue from '@/layouts/Footer.vue';
import bgContact from "@/uploads/frontend/banners/contact1.jpg"
export default {
    name: "ContactView",
    data() {
        return {
            bgContact:bgContact
        }
    },
    components: {
        breadcrumbVue,
        FooterVue,
        Header  
    },
    methods: {
        
    },

}
</script>