<template>
  <NuxtLayout>
    <div
      id="ShoppingCartPage"
      class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        v-if="false"
        class="h-[500ox] flex items-center justify-center>">
        <div class="pt-20">
          <Img
            class="mx-auto"
            src="/cart-empty.png"
            width="250" />

          <div class="text-xl text-center mt-4">No items yet?</div>

          <div
            v-if="true"
            class="flex text-center">
            <NuxtLink
              class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
              to="/auth">
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        v-else
        class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="md:bg-white rounded-lg p-4">
            <div class="bg-white rounded-lg p-4">
              <div class="text-2xl font-bold mb-2">Shopping Cart</div>
            </div>
            <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
              <div class="text-red-500 font-bold">Welcome Deals applicable on 1 item only</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
