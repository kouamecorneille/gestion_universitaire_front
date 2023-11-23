<template>
   <div class="auth-main">
        <div class="container">
            <div class="slideIn">
                <!-- image and information -->
                <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-12 col-xs-12 no-padding fitxt-center">
                    <div class="image-area">
                    <div class="content">
                        <div class="image-hader">
                            <h2>Bienvenue à UTA</h2>
                        </div>
                        <div class="center img-hol-p">
                            <img :src="logo" height="60" alt="RamomCoder School">
                        </div>
                        <div class="address">
                            <p>2233 Hartway Street Viborg,<br>New York</p>
                        </div>          
                        <div class="f-social-links center">
                            <a href="https://www.facebook.com/username" target="_blank">
                                <span class="fab fa-facebook-f"></span>
                            </a>
                            <a href="https://www.twitter.com/username" target="_blank">
                                <span class="fab fa-twitter"></span>
                            </a>
                            <a href="https://www.linkedin.com/username" target="_blank">
                                <span class="fab fa-linkedin-in"></span>
                            </a>
                            <a href="https://www.youtube.com/username" target="_blank">
                                <span class="fab fa-youtube"></span>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>

                <!-- Login -->
                <div class="col-lg-6 col-lg-offset-right-1 col-md-6 col-md-offset-right-1 col-sm-12 col-xs-12 no-padding">
                    <div class="sign-area">
                        <div class="sign-hader pt-md">
                            <img :src="logo" height="54" alt="">
                            <h2>Université de Technologie d'Abidjan</h2>
                        </div>
                            <div class="forgot-header">
                                <h4><i class="fas fa-fingerprint"></i> Restauration de mot de passe</h4>
                                Saisissez votre adresse email et vous recevrez des instructions de réinitialisation.
                            </div>
                            <form action="https://iconschool.ramomcoder.com/authentication/forgot" method="post" accept-charset="utf-8">
                            <div class="form-group ">
                                <div class="input-group input-group-icon">
                                    <span class="input-group-addon">
                                        <span class="icon">
                                            <i class="fas fa-unlock-alt"></i>
                                        </span>
                                    </span>
                                    <input type="text" class="form-control" v-model="email"  autocomplete="off" placeholder="Usename">
                                </div>
                                <span class="error"></span>
                            </div>

                            <div class="form-group">
                                <button type="submit" id="btn_submit" class="btn btn-block ladda-button btn-round">
                                    <i class="far fa-paper-plane"></i> Envoyer les instructions                                   
                                </button>
                            </div>
                            <div class="text-center">
                                <a href="index.html"><i class="fas fa-long-arrow-alt-left"></i> Se connecter</a>
                            </div>
                            <div class="sign-footer">
                                <p>&copy; 2023 Uta School Management - Developed by Kouame Crneile</p>
                            </div>
                        </form>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LogoUTA from "@/uploads/app_image/UTA.jpeg"
export default {
    name: "ForgotPasswordView",
    data() {
        return {
            logo: LogoUTA,
            email:""
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
}
</script>