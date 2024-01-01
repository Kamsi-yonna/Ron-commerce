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
                <CartItem
                  :product="product"
                  :selectedArray="selectedArray"
                  @selectedRadio="selectedRadioFunc(product)" />
              </div>
            </div>
          </div>
        </div>
        <div class="md:hidden block my-4" />

        <div class="block my-4" />

        <div class="md:w-[35%]">
          <div
            id="Summary"
            class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>
            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $
                <span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button
              class="flex items-center justify-center bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
              @click="goToCheckout">
              Checkout
            </button>
          </div>

          <div
            id="PaymentProtection"
            class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2">Payment methods</div>
            <div class="flex items-center justify-start gap-8 my-4">
              <div
                v-for="card in cards"
                :key="card">
                <img
                  class="h-6"
                  :src="card" />
              </div>
            </div>

            <div class="border-b" />

            <div class="text-lg font-semibold mb-2 mt-2">Buyer Protection</div>
            <p class="my-2">Get full refund if the item is not as described or if is not delivered</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUserStore } from '~/composables/useUserStore'
const userStore = useUserStore()
interface Product {
  id: number
  title: string
  description: string
  url: string
  price: number
}

const selectedArray = ref<Product[]>([])

const cards: string[] = ['visa.png', 'mastercard.png', 'paypal.png', 'applepay.png']

const goToCheckout = () => {
  const ids: number[] = []
  userStore.checkout = []

  selectedArray.value.forEach((item) => ids.push(item.id))

  const res = userStore.cart.filter((item: Product) => {
    return ids.includes(item.id)
  })

  res.forEach((item) => userStore.checkout.push(item))

  return navigateTo('/checkout')
}

const selectedRadioFunc = (e: Product) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e)
    return
  }

  selectedArray.value.forEach((item, index) => {
    if (e.id !== item.id) {
      selectedArray.value.push(e)
    } else {
      selectedArray.value.splice(index, 1)
    }
  })
}

const totalPriceComputed = computed(() => {
  let price = 0
  userStore.cart.forEach((prod: { price: number }) => {
    price += prod.price
  })
  return price / 100
})

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

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200)
})
</script>

<style scoped></style>
