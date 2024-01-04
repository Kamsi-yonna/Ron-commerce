<template>
  <NuxtLayout>
    <div
      id="AddressPage"
      class="mt-4 max-w-[500px] mx-auto px-2">
      <div class="mx-auto bg-white rounded-lg p-3">
        <div class="text-xl text-bold mb-2">Address Details</div>
        <form @submit.prevent="">
          <TextInput
            class="w-full"
            placeholder="Contact Name"
            type="text" />

          <TextInput
            class="w-full mt-2"
            placeholder="Address"
            type="text" />

          <TextInput
            class="w-full"
            placeholder="Zip Code"
            type="text" />

          <TextInput
            class="w-full"
            placeholder="City"
            type="text" />

          <TextInput
            class="w-full"
            placeholder="Country"
            type="text" />

          <button
            class="mt-6 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
            type="submit">
            <div>Update Address</div>
            <Icon
              class="mr-2"
              name="eos-icons:loading"
              size="25" />
          </button>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { useUserStore } from '~/composables/useUserStore'
// const userStore = useUserStore()

// let contactName = ref(null)
// let address = ref(null)
// let zipCode = ref(null)
// let city = ref(null)
// let country = ref(null)

// let currentAddress = ref(null)
// let isUpdate = ref(false)
// let isWorking = ref(false)
// let error = ref(null)
</script>

<style scoped></style>
