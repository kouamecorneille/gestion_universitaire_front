<template>
    <!-- Footer Starts -->
    <footer class="main-footer">
      <div
        class="footer-area"
        style="background: #383838 url(assets/frontend/images/07.png)"
      >
        <div class="container px-md-0">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="footer-logo">
                <img src="../uploads/app_image/UTA-removebg-preview.png" alt="Logo" />
              </div>
              <h4>UTA</h4>
              <p class="footer-dec">
                L’université Technologique d'Abidjan UTA vise à    former des managers capables de mettre en œuvre  et de développer aussi bien au plan national qu’international des stratégies d’entreprise. 
              </p>
              <ul class="social">
                <li>
                  <a href="https://facebook.com" target="_blank"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </li>
                <li>
                  <a href="https://google.com" target="_blank"
                    ><i class="fab fa-google-plus-g"></i
                  ></a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <h4>Notre Addresse</h4>
              <ul class="list-unstyled address-list">
                <li class="clearfix address">
                  <i class="fas fa-map-marker-alt"></i> Palmeraie, Saint viasteur
                </li>
                <li class="clearfix">
                  <i class="fas fa-phone"></i>  +225 07 57 04 37 59 / 07 89 30 92 13 
                </li>
                <li class="clearfix">
                  <i class="fas fa-fax"></i> +225 05 85 62 01 23
                </li>
                <li class="clearfix">
                  <i class="fas fa-envelope"></i>
                  <a href="mailto:info@uta.ci">info@uta.ci</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <h4>Liens rapides</h4>
              <ul class="list-unstyled quick-links">
                <li>
                  <router-link to="/">
                  <i class="fa fa-angle-right"></i> Acceuil</router-link>
                </li>
                <li>
                  <router-link to="/evenements"
                    ><i class="fa fa-angle-right"></i> Evenements</router-link
                  >
                </li>
                <li>
                  <router-link to="/about-us"
                    ><i class="fa fa-angle-right"></i> A propos</router-link
                  >
                </li>
                <li>
                  <router-link to="/faq">
                  <i class="fa fa-angle-right"></i> FAQ</router-link>
                </li>
                <li>
                  <router-link to="/admission-uta"
                    ><i class="fa fa-angle-right"></i> Admission</router-link
                  >
                </li>
                <li>
                  <router-link to="/gallery-uta"
                    ><i class="fa fa-angle-right"></i> Gallerie</router-link
                  >
                </li>
                <li>
                  <router-link to="/contact-us"
                    ><i class="fa fa-angle-right"></i> Contact-nous</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright" style="background-color: #262626; color: #8d8d8d">
        <div class="container px-md-0 clearfix text-center">
          Copyright &copy; 2023 <span>UTA</span>. Tous droits réservés. <span>powered by InfinitiCode Labs</span>
        </div>
      </div>
      <!-- Copyright Ends -->
    </footer>
    <!-- Footer Ends -->
</template>

<script>
export default {
  name:"FooterView",
  data() {
    return {
      
    }
  },
  
}
</script>