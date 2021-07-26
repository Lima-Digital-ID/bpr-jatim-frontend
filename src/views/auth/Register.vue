<template lang="en">
    <div class="">
        
     <!-- Navbar-->
    <Header/>


<div class="container">
    <div class="row py-5 mt-4 align-items-center">
        <!-- For Demo Purpose Left Hero -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <LeftHero2/>
        </div>

        <!-- hero images -->

        <!-- Registeration Form -->
        <div class="col-md-7 col-lg-6 ml-auto">
            <!-- form -->

                <FormRegister/>


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
import LeftHero2 from '@/components/auth/Left-hero2.vue';
import FormRegister from '@/components/auth/Form-register.vue'

export default {
  name: 'Login',
  components: {
    Header, LeftHero2, FormRegister
  },
}
</script>