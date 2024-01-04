<template>
  <NuxtLayout>
    <div
      id="CheckoutPage"
      class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-beween mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-xl font-semibold mb-2">Shipping Address</div>

            <div v-if="true">
              <NuxtLink
                class="flex iitems-center pv-2 text-blue-500 hover:text-red-400"
                to="/address">
                <Icon
                  class="mr-2"
                  name="mdi:plus"
                  size="18" />
                Update Address
              </NuxtLink>

              <div class="pt-2 border-t">
                <div class="underline pb-1">Delivery Address</div>
                <ul class="text-xs">
                  <li class="flex items-center gap-2 mt-2">
                    <div>Contact name:</div>
                    <div class="font-bold">Current Address name</div>
                  </li>

                  <li class="flex items-center gap-2 mt-2">
                    <div>Address:</div>
                    <div class="font-bold">Current Address</div>
                  </li>

                  <li class="flex items-center gap-2 mt-2">
                    <div>Zip Code:</div>
                    <div class="font-bold">Current Address Zipcode</div>
                  </li>

                  <li class="flex items-center gap-2 mt-2">
                    <div>City:</div>
                    <div class="font-bold">Current Address City</div>
                  </li>

                  <li class="flex items-center gap-2 mt-2">
                    <div>Country:</div>
                    <div class="font-bold">Current Address country</div>
                  </li>
                </ul>
              </div>
            </div>

            <NuxtLink
              v-else
              class="flex items-center text-blue-500 hover:text-red-400"
              to="/address">
              <Icon
                class="mr-2"
                name="mdi:plus"
                size="18"></Icon>
            </NuxtLink>
          </div>

          <div
            id="Items"
            class="bg-white rounded-lg p-4 mt-4">
            <div
              v-for="(product, index) in products"
              :key="index">
              <CheckoutItem :product="product" />
            </div>
          </div>

          <div class="md:hidden block my-4" />

          <div class="md:w-[35%] mt-4">
            <div
              id="PlaceOlder"
              class="bg-white rounded-lg p-4">
              <div class="text-2xl font-extrabold mb-2">Summary</div>

              <div class="flex items-center justify-between my-4">
                <div class="font-semibold">Total</div>
                <div class="text-2xl font-semibold">
                  $
                  <span class="font-extrabold">Total / 100</span>
                </div>
              </div>

              <form @xubmit.prevent="">
                <div
                  id="card-element"
                  class="border border-gray-500 p-2 rounded-sm" />
                <p
                  id="card-error"
                  class="text-red-700 text-center font-semibold"
                  role="alert" />

                <button
                  class="mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
                  disabled
                  type="submit">
                  <Icon name="eos-icons:loading" />
                  <div>Place Order</div>
                </button>
              </form>
            </div>

            <div class="bg-white rounded-lg p-4 mt-4">
              <div class="text-lg font-semibold mb-2 mt-2">Ron Commerce</div>
              <p class="my-2">Ron Commerce keeps your information and payment safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { useUserStore } from '~/composables/useUserStore'
// const userStore = useUserStore()
// const route = useRoute()

// const stripe = null
// const elements = null
// const card = null
// const form = null
// const total = ref(0)
// const clientSecret = null
// const currentAddress = ref(null)
// const isProcessing = ref(false)

interface Product {
  id: number
  title: string
  description: string
  url: string
  price: number
}

// onMounted(() => {
//   isProcessing.value = true

//   useUserStore.checkout.forEach((item) => {
//     total.value += item.price
//   })
// })

// watch(
//   () => total.value,
//   () => {
//     if (totalmem.value > 0) {
//       StripeInit()
//     }
//   }
// )

// const stripeInit = async () => {}

// const pay = async () => {}

// const createOrder = async (stripeId) => {}

// const showError = async (errorMsgTxt) => {}

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
