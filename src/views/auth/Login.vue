<template lang="en">
    <div class="">
        
     <!-- Navbar-->
    <Header/>


<div class="container">
    <div class="row py-5 mt-4 align-items-center">
        <!-- For Demo Purpose Left Hero -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <LeftHero/>
        </div>

        <!-- hero images -->

        <!-- Registeration Form -->
        <div class="col-md-7 col-lg-6 ml-auto">
            <!-- form -->
                <FormLogin/>
            <!-- /form -->
        </div>
    </div>
</div>

    </div>
</template>


<style scoped>
    @import '../../assets/css/style-form-auth.css';
</style>

<script>

import Header from '@/components/auth/Header.vue';
import LeftHero from '@/components/auth/Left-hero.vue';
import FormLogin from '@/components/auth/Form-login.vue'
import FormRegister from '@/components/auth/Form-register.vue'

export default {
  name: 'Login',
  components: {
    Header, LeftHero, FormLogin, FormRegister
  },
}
</script>