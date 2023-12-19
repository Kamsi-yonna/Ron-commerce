<template>
  <div id="MainLayout" class="w-full z-50">
    <div id="TopMenu" class="w- bg-[#FAFAFA] border-b md:block">
      <ul
        class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#FAFAFAFA] max-w-[1440px]"
      >
        <NuxtLink class="side-nav-link" to="/" text="Sell on Ron" />

        <NuxtLink class="side-nav-link" to="/" text="Cookie Preferences" />

        <NuxtLink class="side-nav-link" to="/" text="Help" />

        <NuxtLink class="side-nav-link" to="/" text="Buyer Protection" />

        <NuxtLink class="side-nav-link">
          <Icon name="ic:outline-install-mobile" size="17" />
          App
        </NuxtLink>

        <NuxtLink
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="dropdown dropdown-hover side-nav-link relative flex items-center h-full"
          :class="
            isAccountMenu
              ? 'bg-white shadow-[0_15px_100px_40px_rgba(0,0,0,0.01)]'
              : 'border-[#FAFAFA]'
          "
        >
          <Icon name="ph:user-circle-fill" size="17" />
          Account
          <Icon name="mdi:chevron-down" size="15" class="ml-3" />

          <ul
            id="AccountMenu"
            v-if="isAccountMenu"
            class="dropdown-content absolute bg-white w-[200px] text-[#333333] z-40 top-[30px] -left-[100px] border-x border-b"
          >
            <li class="text-semibold text-[10px] mt-4 mb-2 px-2">
              Welcome to Ron Commerce
            </li>
          </ul>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const isAccountMenu = ref(false);
</script>
