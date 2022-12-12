<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const modules = [Navigation];

const depositions = [
  {
    name: 'Ayrton',
    declarations: 'O seminário profético marcou a minha vida. Aprendi que a minha palavra tem poder',
    event: '4º Seminário'
  },
  {
    name: 'Estephanie',
    declarations: 'O seminário profético marcou a minha vida. Aprendi que a minha palavra tem poder',
    event: '4º Seminário'
  },
  {
    name: 'Alefy',
    declarations: 'O seminário profético marcou a minha vida. Aprendi que a minha palavra tem poder',
    event: '4º Seminário'
  },
  {
    name: 'Jorge',
    declarations: 'O seminário profético marcou a minha vida. Aprendi que a minha palavra tem poder',
    event: '4º Seminário'
  },
  {
    name: 'Luana',
    declarations: 'O seminário profético marcou a minha vida. Aprendi que a minha palavra tem poder',
    event: '4º Seminário'
  }
]
</script>
<template>
  <div>
    <div class="sm:text-center mt-10">
        <h2 class="text-lg font-semibold leading-8 text-white">Transactions</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better way to send money</p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>
    <swiper class="mySwiper flex items-center justify-around h-80 px-10 md:px-10" navigation :modules="modules" :breakpoints="{
      0: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1536: {
        slidesPerView: 4,
      },
    }" :space-between="50">
      <swiper-slide v-for="deposition in depositions" v:key="depoisiton.name"
        class="bg-white/80 h-fit flex items-center justify-evenly text-left px-4 py-4 rounded text-black"
        style="align-self: center">
        <div class=" w-1/4">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

        </div>
        <div class="w-3/4 flex flex-col items-start text-left font-semibold">
          <p class="text-lg py-1">{{ deposition.name }}</p>
          <p class="italic text-sm py-1 font-light">{{ deposition.declarations }}</p>
          <p class="text-xs italic py-1 font-medium">{{ deposition.event }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="sm:text-center mb-10 ">
        <h2 class="text-lg font-semibold leading-8 text-white">Transactions</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better way to send money</p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.swiper-wrapper {
  align-items: center;
}
</style>
