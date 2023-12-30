<template>
  <NuxtLayout>
    <div
      id="ShoppingCartPage"
      class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        v-if="false"
        class="h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <img
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
              <div class="text-2xl font-bold mb-2">Shopping Cart (0)</div>
            </div>
            <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
              <div class="text-red-500 font-bold">Welcome Deals applicable on 1 item only</div>
            </div>

            <div
              id="Items"
              class="bg-white rounded-lg p-4 mt-4">
              <div
                v-for="(product, id) in products"
                :key="id">
                <CartItem :product="product" />
                <!-- :selectedArray="selectedArray" -->
                <!-- @selectedRadio="selectedRadioFunc"  -->
              </div>
            </div>
          </div>

          <div class="md:hidden block my-4" />

          <div class="md:hidden block my-4">
            <div class="md:w-[35%]">
              <div
                id="Summary"
                class="bg-white rounded-lg p-4">
                <div class="text-2xl font-extrabold mb-2">Summary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
interface Product {
  id: number
  title: string
  description: string
  url: string
  price: number
}

const products: Product[] = [
  {
    id: 1,
    title: 'Title 1',
    description: 'This is a good product',
    url: 'https://picsum.photos/id/7/800/800',
    price: 9000
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'This is another product',
    url: 'https://picsum.photos/id/42/800/800',
    price: 8500
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Yet another product description',
    url: 'https://picsum.photos/id/12/800/800',
    price: 9500
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'Description for the fourth product',
    url: 'https://picsum.photos/id/46/800/800',
    price: 8000
  },
  {
    id: 5,
    title: 'Title 5',
    description: 'Fifth product description',
    url: 'https://picsum.photos/id/81/800/800',
    price: 9200
  },
  {
    id: 6,
    title: 'Title 6',
    description: 'Description for the sixth product',
    url: 'https://picsum.photos/id/21/800/800',
    price: 8700
  },
  {
    id: 7,
    title: 'Title 7',
    description: 'Seventh product description',
    url: 'https://picsum.photos/id/35/800/800',
    price: 9100
  },
  {
    id: 8,
    title: 'Title 8',
    description: 'Description for the eighth product',
    url: 'https://picsum.photos/id/61/800/800',
    price: 8300
  },
  {
    id: 9,
    title: 'Title 9',
    description: 'Ninth product description',
    url: 'https://picsum.photos/id/10/800/800',
    price: 8900
  },
  {
    id: 10,
    title: 'Title 10',
    description: 'This is the tenth product',
    url: 'https://picsum.photos/id/78/800/800',
    price: 8000
  }
]
</script>

<style scoped></style>
