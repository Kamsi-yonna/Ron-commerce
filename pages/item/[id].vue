<template>
  <NuxtLayout>
    <div
      id="ItemPage"
      class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-full-[40%]">
          <img
            v-if="currentImage"
            class="rounded-lg object-fit"
            :src="currentImage" />
          <div
            v-if="images[0] !== ''"
            class="flex ites-center justify-center mt-2">
            <div
              v-for="image in images"
              :key="image">
              <img
                class="rounded-md object-fit border-[3px] cursor-pointer"
                :class="currentImage === image ? 'border-[#FF5353]' : ''"
                :src="image"
                width="70"
                @click="currentImage = image"
                @mouseover="currentImage = image" />
            </div>
          </div>
        </div>
        <div class="md:w-[60%] bg-white p-3 rounded-lg">
          <div v-if="true">
            <p class="mb-2">Title</p>
            <p class="font-light text-[12px] mb-2">Description</p>
          </div>

          <div class="flex items-center pt-1.5">
            <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
              <Icon
                class="-mt-[17px]"
                name="material-symbols:star-rounded"
                size="12" />
            </span>
            <p class="text-primary">Extra 5% off</p>
          </div>

          <div class="flex items-center justify-start my-2 rating rating-xs">
            <div
              v-for="index in 5"
              :key="index">
              <input
                class="mask mask-star-2 bg-orange-400"
                disabled
                name="rating-5"
                type="radio" />
            </div>
            <label class="text-[13px] font-light ml-2">213 Reviews 1,000+ orders</label>
          </div>

          <div class="border-b"></div>

          <div class="flex items-center justify-start gap-2 my-2">
            <div class="text-xl font-bold">$ {{ priceComputed }}</div>
            <span class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm">70% off</span>
          </div>

          <p class="text-[#009A66] text-xs font-semibold pt-1">Free 11-day delivery over ￡8.28</p>

          <p class="text-[#009A66] text-xs font-semibold pt-1">Free Shipping</p>

          <div class="py-2" />

          <button
            class="px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-warning to-error"
            :disabled="isInCart"
            @click="addToCart(product)">
            <div v-if="isInCart">Is Added</div>
            <div v-else>Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '~/composables/useUserStore'

interface Product {
  id: string
}

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true
  }
})

const { product } = toRefs(props)

const route = useRoute()
const userStore = useUserStore()

const priceComputed = computed<number>(() => {
  return 12.41
})

const addToCart = (product: Product): void => {
  alert(`added ${product}`)
}

const isInCart = computed<boolean>(() => {
  let res = false
  userStore.cart.forEach((product: Product) => {
    if (route.params.id === product.id) {
      res = true
    }
  })
  return res
})

const currentImage = ref<string>('')
const images = ref<string[]>([
  '',
  'https://picsum.photos/id/32/800/800',
  'https://picsum.photos/id/52/800/800',
  'https://picsum.photos/id/12/800/800',
  'https://picsum.photos/id/62/800/800',
  'https://picsum.photos/id/92/800/800',
  'https://picsum.photos/id/362/800/800'
])

onMounted(() => {
  watchEffect(() => {
    currentImage.value = 'https://picsum.photos/id/322/800/800' as string
    images.value[0] = 'https://picsum.photos/id/312/800/800' as string
  })
})
</script>

<style scoped></style>
