
import Popup from './components/popup/Popup.vue';

<template>
  <div id="app">
    <router-view/>
    <FloatingWaButton nomor="+6282247623501" message="" type="redirect" />
  </div>
</template>

<script>
import FloatingWaButton from "@/components/widget/FloatingWaButton.vue";

export default {
  components: {
    FloatingWaButton,
  }
}
</script>

<style>
@import 'assets/css/style.css';
</style>
