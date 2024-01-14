<template>
  <!-- <NuxtLayout> -->
  <div class="fixed z-[-1] bg-[#F2F2F2] w-full h-[100vh]" />
  <NuxtPage />

  <MenuOverlay
    :class="[
      { 'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverlay },
      { 'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay }
    ]" />
  <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">
import { useUserStore } from '~/composables/useUserStore'
const metaDef = useDefault('meta')

useSeoMeta({ ...metaDef })
const userStore = useUserStore()

const route = useRoute()

const windowWidth = ref<number>(process.client ? window.innerWidth : 0)

onMounted(() => {
  userStore.isLoading = true
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

watch(
  () => windowWidth.value,
  () => {
    if (windowWidth.value >= 767) {
      userStore.isMenuOverlay = false
    } else {
      userStore.isMenuOverlay = true
    }
  }
)

watch(
  () => route.fullPath,
  () => {
    userStore.isLoading = true
  }
)
</script>
