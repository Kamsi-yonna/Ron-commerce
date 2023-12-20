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
            <li class="flex items-center gap-1 px-3 mb-3">
              <NuxtLink
                to="/auth"
                class="bg-[#FF4646] text-center w-full text-[13px] rounded-sm text-white font-semibold p-2 hover:bg-[#ff4631]"
                >Sign in</NuxtLink
              >
            </li>
            <div class="border-b"></div>
            <ul class="bg-white">
              <li class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">
                <NuxtLink to="/orders">My Orders</NuxtLink>
              </li>
              <li class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">
                <NuxtLink>Sign out</NuxtLink>
              </li>
            </ul>
          </ul>
        </NuxtLink>
      </ul>
    </div>
    <div id="MainHeader" class="flex-items-center w-full bg-white">
      <div class="flex lg:justify-start justify-between gap-10 max=w=[1150px]">
        <NuxtLink to="/" class="min-w-[170px]">
          <img width="170" src="/AliExpress-logo.png" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isAccountMenu = ref(false);
</script>
