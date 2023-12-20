<template>
    <Header />
      <router-view />
    <Footer />
</template>

<script>
import Header from "@/layout/layout-header/Header.vue";
import Footer from '@/layout/layout-footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
