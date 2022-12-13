<template>
  <div class="bg-white py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <h2 class="text-center text-lg font-semibold leading-8 text-indigo-600">Sobre o Seminário</h2>
        <p class="text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Como despertar e fluir no mover profético</p>
        <p class="text-center mx-auto mt-6 max-w-2xl text-lg leading-6 md:leading-8 text-gray-600">Existem pessoas que passam a vida cristã inteira sem desfrutar de um dos maiores dons que o Senhor liberou para a igreja: o dom profético!</p>
      </div>

      <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row items-center text-center md:items-start md:text-left">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
              <component :is="feature.icon" class="h-8 w-8" aria-hidden="true" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-gray-900">{{ feature.name }}</p>
              <p class="mt-2 text-base leading-6 md:leading-7 text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FireIcon, UserGroupIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Ativação do ministério',
    description:
      'A manifestação do sobrenatural de Deus é essencial na vida de um cristão. Não existe morte espiritual que resista ao manifestar do Poder de Deus',
    icon: FireIcon,
  },
  {
    name: 'Edificação do Corpo',
    description:
      'Aqueles que são canais desobistruídos são armas poderosas nas mãos de Deus para direcionar o povo.',
    icon: UserGroupIcon,
  }
]
</script>