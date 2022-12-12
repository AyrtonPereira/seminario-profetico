<template>
  <div class="bg-white py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <h2 class="text-lg font-semibold leading-8 text-indigo-600">Transactions</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>
      <div class="flex justify-around">
        <div class="w-1/2 flex flex-col items-center justify-start pt-10">
          <div v-for="event in events" :key="event.date" class="rounded border-y border-gray-500 p-4 flex items-center text-black text-base my-2 w-full hover:bg-gray-100 hover:cursor-pointer transition-all">
            <CalendarIcon class="w-8 h-8 mr-2" />
              <p class="mr-2 pr-2 border-r border-gray-300">{{event.date}}</p>
            <p class="font-bold mr-2 pr-2 border-r border-gray-300"> {{event.local}}</p>
            <p class="mr-2">{{event.state}}</p>
          </div>
        </div>
        <div class="w-1/3 flex justify-end"> <img id="image-ezequiel" src="@/assets/images/ezequiel.png" alt="Imagem do pastor /Ezequiel com o braço direito erguido" /></div>
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
]
</script>