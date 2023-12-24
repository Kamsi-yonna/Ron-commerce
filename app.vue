<template>
  <!-- <NuxtLayout> -->
  <div class="fixed z-[-1] bg-[#F2F2F2] w-full h-[100vh]" />
  <NuxtPage />
  <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">
const metaDef = useDefault('meta')

useSeoMeta({ ...metaDef })
</script>
