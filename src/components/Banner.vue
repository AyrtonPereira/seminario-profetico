<script setup>
</script>
<template lang="">
  <div class="flex flex-col-reverse md:flex-row justify-around h-full">
    <div class="w-full flex items-center">
      <div class="flex flex-col items-center justify-center w-full">
        <h1 class="text-6xl">Seminário Profético</h1>
        <p>A sua vida jamais será a mesma</p>
      </div>
    </div>
    <div class="h-full flex items-center w-full justify-center">
      <img id="image-ezequiel" src="@/assets/images/ezequiel.png" alt="Imagem do pastor Ezequiel com o braço direito erguido" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
#image-ezequiel {
  width: calc(40vh / 1.64);
  height: 40vh;

  @media (min-width: 768px) {
    width: 28vw;
    height: calc(28vw / .6);
  }
}
</style>