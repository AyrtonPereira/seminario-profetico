<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import LastEdition from "@/components/LastEdition.vue";
import Depositions from "@/components/Depositions.vue";
import schedule from "@/components/Schedule.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <div id="home-body" class="scroll-smooth">
    <div class="md:min-h-screen">
      <Header class="z-10" />
      <Banner class="z-0" id="home" />
    </div>
    <LastEdition id="about" />
    <Depositions id="depositions" />
    <schedule id="schedule" />
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
#home-body {
  background: url("@/assets/img/bg-mobile.webp") no-repeat center;
  background-attachment: fixed;
  background-size: cover;

  @media (min-width: 768px) {
    background: url("@/assets/img/bg-desk.webp") no-repeat center;
    background-attachment: fixed;
    background-size: cover;
    backdrop-filter: blur(10px);
  }
}
</style>
