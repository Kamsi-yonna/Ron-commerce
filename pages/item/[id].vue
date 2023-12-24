<template>
  <NuxtLayout>
    <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-full-[40%]">
          <Img
            class="rounded-lg object-fit"
            src="https://picsum.photos/id/32/800/800"
          />
          <div
            v-if="images[0] !== ''"
            class="flex ites-center justify-center mt-2"
          >
            <div v-for="image in images" :key="image">
              <img
                class="rounded-md object-fit border-[3px] cursor-pointer"
                :src="image"
                width="70"
              />
            </div>
            rededsca
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const images = ref([
  '',
  'https://picsum.photos/id/32/800/800',
  'https://picsum.photos/id/32/800/800',
  'https://picsum.photos/id/32/800/800',
  'https://picsum.photos/id/32/800/800',
  'https://picsum.photos/id/32/800/800',
  'https://picsum.photos/id/32/800/800',
])

onMounted(() => {})
</script>

<style scoped></style>
