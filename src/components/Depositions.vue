<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const modules = [Navigation];

let depositions = [
{
    name: 'Carolina Rocha',
    declarations: 'Durante o seminário, Deus me entregou palavras que testificaram no coração das pessoas que eu entreguei e o Senhor me usou no culto do mesmo final de semana para liberar a cura sobre a vida de uma senhora.',
    event: '1º Edição do Seminário',
    photo:'https://seminario-profetico.s3.amazonaws.com/carolina-rocha.webp'
  },
  {
    name: 'Luana Melo',
    declarations: 'Participar do seminário profético, verdadeiramente marcou a minha vida. Recebi chaves espirituais para fluir mais no Espírito e aprendi que o dom de profetizar está à disposição de todos que desejam e o buscam em Deus.',
    event: '4º Edição do Seminário',
    photo:'https://seminario-profetico.s3.amazonaws.com/luana-melo.webp' 
  },
  {
    name: 'Priscila Martins',
    declarations: 'O Seminário Profético foi um marco em minha vida. Eu era uma pessoa antes e me tornei outra depois. Eu compreendi que Deus usa a todos mesmo aqueles que se sentem improváveis para liberar uma palavra Profética.',
    event: '4º Edição do Seminário',
    photo:'https://seminario-profetico.s3.amazonaws.com/priscila-martins.webp'
  },
  {
    name: 'Ayrton Pereira',
    declarations: 'No seminário o Senhor reavivou o meu chamado pastoral e ativou um novo nível de ousadia na minha vida. Aprendi que a minha palavra tem poder e que eu preciso fluir nos dons diariamente.',
    event: '4º Edição do Seminário',
    photo:'https://seminario-profetico.s3.amazonaws.com/ayrton-pereira.webp'
  },
  {
    name: 'Elisabete dos Santos',
    declarations: 'Aprendi no seminário profético que o Senhor entrega talentos a todos os seu filhos e devemos multiplica-los. Percebi que o dom de profecia está em nós, mas devemos aprimora-los.',
    event: '4º Edição do Seminário',
    photo:'https://seminario-profetico.s3.amazonaws.com/elisabete-santos.webp'
  },
  {
    name: 'Juliana Oliveira',
    declarations: 'O Seminário profético me fez aperfeiçoar o discernimento que Deus já tinha liberado sobre minha vida. Foi sensacional.',
    event: '4º Edição do Seminário',
    photo:'https://seminario-profetico.s3.amazonaws.com/juliana-oliveira.webp'
  }
]

</script>
<template>
  <div>
    <div class="sm:text-center mt-10 text-center px-2">
      <h2 class="text-lg font-semibold leading-8 text-white">Depoimentos</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Escute quem já foi marcado pelo profético
      </p>
      <p class="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-6 md:leading-8 text-white">Estes são depoimentos reais de pessoas que já
        participaram do seminário e foram marcadas pelo Senhor.</p>
    </div>
    <swiper class="mySwiper flex items-center justify-around px-10 mt-10" navigation :modules="modules"
      :breakpoints="{
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
        class="bg-white/80 flex flex-col md:flex-row items-center justify-evenly text-left px-1 md:px-4 py-4 rounded text-black"
        style="align-self: center;">
        <div class=" w-1/4 flex justify-center">
          <img v-if="deposition.photo" class="inline-block h-auto w-20 rounded-full ring-2 ring-white"
            :src="deposition.photo" alt="" />

        </div>
        <div class="w-full px-2 text-center md:w-3/4 flex flex-col items-center text-left font-semibold">
          <p class="text-lg py-1 text-center font-semibold">{{ deposition.name }}</p>
          <p class="italic text-sm py-1 font-light overflow-hidden h-40">{{ deposition.declarations }}</p>
          <p></p>
          <p class="text-xs italic py-1 font-medium text-center mt-1">{{ deposition.event }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class=" mb-10 text-center px-2">
      <p class="mx-auto mt-6 max-w-2xl md:text-lg text-base leading-6 md:leading-8 text-white">Deseja contribuir com um depoimento? Acesse no
        botão abaixo.</p>
      <a href="#"
        class="pointer-events-none inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white/50 shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 mt-5">
        Em Breve
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.swiper-wrapper {
  align-items: center;
}
</style>
