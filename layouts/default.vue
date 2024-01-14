<template>
  <div
    id="MainLayout"
    class="w-full z-50">
    <div
      id="TopMenu"
      class="w-full bg-primary-content border-b md:block">
      <ul
        class="flex items-center justify-end text-sm text-base-content font-light px-2 h-10 bg-primary-content max-w-[1200px]">
        <NuxtLink
          class="side-nav-link"
          text="Sell on Ron"
          to="/" />

        <NuxtLink
          class="side-nav-link"
          text="Cookie Preferences"
          to="/" />

        <NuxtLink
          class="side-nav-link"
          text="Help"
          to="/" />

        <NuxtLink
          class="side-nav-link"
          text="Buyer Protection"
          to="/" />

        <NuxtLink class="side-nav-link">
          <Icon
            name="ic:outline-install-mobile"
            size="17" />
          App
        </NuxtLink>

        <NuxtLink
          class="dropdown dropdown-hover side-nav-link relative flex items-center h-full"
          :class="isAccountMenu ? 'bg-white shadow-[0_15px_100px_40px_rgba(0,0,0,0.01)]' : 'border-primary-content'"
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false">
          <Icon
            name="ph:user-circle-fill"
            size="17" />
          Account
          <Icon
            class="ml-3"
            name="mdi:chevron-down"
            size="15" />

          <ul
            v-if="isAccountMenu"
            id="AccountMenu"
            class="dropdown-content absolute bg-white w-[200px] text-base-content z-40 top-[30px] -left-[100px] border-x border-b">
            <li class="text-semibold text-[13px] mt-4 mb-2 px-2">Welcome to RonExpress</li>
            <li class="flex items-center gap-1 px-3 mb-3">
              <NuxtLink
                class="bg-primary text-center w-full text-[13px] rounded-sm text-white font-semibold p-2 hover:bg-error"
                to="/auth">
                Sign in
              </NuxtLink>
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
    <div
      id="MainHeader"
      class="flex-items-center w-full bg-white pt-4">
      <div class="flex lg:justify-start justify-between gap-10 max=w=[1150px]">
        <NuxtLink
          class="min-w-[170px]"
          to="/">
          <img
            src="/RonExpress-logo.png"
            width="170" />
        </NuxtLink>

        <div class="max-w-[700px] w-full md:block">
          <div class="relative">
            <div class="flex items-center border-2 border-primary rounded-md w-full">
              <input
                v-model="searchItem"
                class="w-full placeholder-gray-400 text-[12px] pl-3 focus:outline-none"
                placeholder="Search items"
                type="text" />
              <button class="flex items-center h-[100% p-1.5 px-2 bg-primary">
                <Icon
                  v-id="isSearching"
                  class="mr-2 text-base-200"
                  name="eos-icons:loading" />
                <Icon
                  color="#FFF"
                  name="ph:magnifying-glass" />
              </button>
            </div>
            <div class="absolute bg-white max-w-[700px] text-[12px] h-auto w-full">
              <div
                v-if="false"
                class="p-1">
                <NuxtLink
                  class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                  to="/item/item.id">
                  <div class="flex items-center">
                    <img
                      class="rounded-md"
                      src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
                      width="40" />
                    <div class="truncate ml-2">Item title</div>
                  </div>
                  <div class="truncate">$100</div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink
          class="flex items-center"
          to="/shoppingCart">
          <button
            class="relative md:block hidden"
            @mouseenter="isCartHover = true"
            @mouseleave="isCartHover = false">
            <span
              class="absolute flex items-center justify-center -right-[3px] top-0 bg-primary h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full">
              3
            </span>
            <div class="min-w[40px]">
              <Icon
                color="#FF4646"
                name="ph:shopping-cart-simple"
                size="33" />
            </div>
          </button>
        </NuxtLink>
        <button
          class="md:hidden block p-1.5 mt-[2px] hover:bg-gray-200"
          @click="userStore.isMenuOverlay = true">
          <Icon
            name="radix-icons:hamburger-menu"
            size="20" />
        </button>
      </div>
    </div>
  </div>

  <!-- <loading v-if="(userStore.isLoading = true)" /> -->

  <div class="lg:pt-[50px] md:pt-[30px] pt-[40px]"></div>
  <slot />

  <Footer />
</template>

<script setup lang="ts">
import { useUserStore } from '~/composables/useUserStore'
const userStore = useUserStore()

const isAccountMenu = ref(false)
const isCartHover = ref(false)
const isSearching = ref(true)
const searchItem = ref('')
</script>
