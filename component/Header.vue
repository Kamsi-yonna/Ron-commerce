<template>
  <div class="sticky top-0 z-50">
    <Container class="pt-4 lg:pt-10">
      <div class="flex items-center justify-between">
        <Logo />
        <div
          class="border border-zinc-300/50 dark:border-zinc-900/60 rounded-full pl-2 lg:pl-4 pr-2 py-2 backdrop-blur-lg bg-zinc-100/50 dark:bg-zinc-800/50"
        >
          <div class="flex items-center gap-4">
            <div class="hidden lg:block"></div>
            <div class="lg:hidden"></div>
            <ColorModeSwitch />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<script setup lang="ts"></script>
