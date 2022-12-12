<template>
  <div class="bg-white py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-lg font-semibold leading-8 text-indigo-600">Agenda</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Veja as próximas edições do
          seminário</p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-6 md:leading-8 text-gray-600">Cada edição do seminário é
          realizada em um local ou estado específico, confira abaixo as próximas edições.</p>
      </div>
      <div class="flex justify-around">
        <div v-if="events.length > 0" class="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center justify-start pt-10">
          <div v-for="event in events" :key="event.date"
            class="rounded border-y border-gray-500 p-2 md:p-4 flex items-center text-gray-900 text-base my-2 w-full hover:bg-gray-100 hover:cursor-pointer transition-all">
            <CalendarIcon class="w-8 h-8 mr-2 " />
            <p class="text-xs md:text-base mr-2 pr-2 border-r border-gray-300">{{ event.date }}</p>
            <p class="text-xs md:text-base font-bold mr-2 pr-2 border-r border-gray-300"> {{ event.local }}</p>
            <p class="text-xs md:text-base mr-2">{{ event.state }}</p>
          </div>
        </div>
        <div v-else class="md:w-1/2 flex flex-col items-center justify-center pt-10 text-gray-900">
          <div class="bg-gray-100 rounded p-2 md:p-4 shadow-md">
            <h3 class="mt-2 text-2xl font-bold tracking-tight md:text-4xl text-center">A agenda está fechada</h3>
          <p class="text-center mx-auto mt-6 max-w-2xl text-sm leading-6 text-gray-600 md:leading-6 md:text-lg">Por enquanto não existe nenhum
            seminário agendado. Fique ligado nas mídias sociais para companhar as próximas datas.</p>
          </div>
        </div>
        <div class="hidden lg:flex w-1/3 lg:justify-end"> 
          <img id="image-ezequiel" src="@/assets/images/ezequiel.png"
            alt="Imagem do pastor /Ezequiel com o braço direito erguido" />
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon } from '@heroicons/vue/24/outline'

const events = [
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  }
];
/* [
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  },
  {
    date: '12/12/2022',
    local: 'Videira Interlagos',
    state: 'São Paulo - SP',
  }
]*/
</script>