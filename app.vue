<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const metaDef = useDefault("meta");

useSeoMeta({ ...metaDef });
</script>
