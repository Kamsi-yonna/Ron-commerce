<template>
  <NuxtLayout>
    <div
      id="IndexPage"
      class="mt-4 max-w-full mx-auto px-2">
      <div
        v-if="products"
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div
          v-for="(product, id) in products"
          :key="id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// import NuxtLayout from "~/layouts/NuxtLayout";

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
