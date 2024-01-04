<template>
  <NuxtLayout>
    <div
      id="AddressPage"
      class="mt-4 max-w-[500px] mx-auto px-2">
      <div class="mx-auto bg-white rounded-lg p-3">
        <div class="text-xl text-bold mb-2">Address Details</div>
        <form @submit.prevent="submit()">
          <TextInput
            v-model:input="contactName"
            class="w-full"
            :error="error && error.type == 'contactName' ? error.message : ''"
            placeholder="Contact Name"
            type="text" />

          <TextInput
            v-model:input="address"
            class="w-full mt-2"
            :error="error && error.type == 'address' ? error.message : ''"
            placeholder="Address"
            type="text" />

          <TextInput
            v-model:input="zipCode"
            class="w-full"
            :error="error && error.type == 'zipCode' ? error.message : ''"
            placeholder="Zip Code"
            type="text" />

          <TextInput
            v-model:input="city"
            class="w-full"
            :error="error && error.type == 'city' ? error.message : ''"
            placeholder="City"
            type="text" />

          <TextInput
            v-model:input="country"
            class="w-full"
            :error="error && error.type == 'country' ? error.message : ''"
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
import { useUserStore } from '~/composables/useUserStore'
const userStore = useUserStore()

const contactName = ref(null)
const address = ref(null)
const zipCode = ref(null)
const city = ref(null)
const country = ref(null)

// const currentAddress = ref(null)
// const isUpdate = ref(false)
const isWorking = ref(false)
const error = ref<{ type: string; message: string } | null>(null)

watchEffect(() => {
  userStore.isLoading = false
})

const submit = () => {
  isWorking.value = true
  error.value = null

  if (!contactName.value) {
    error.value = {
      type: 'contactName',
      message: 'A contact name is required'
    }
  } else if (!address.value) {
    error.value = {
      type: 'address',
      message: 'An address is required'
    }
  } else if (!zipCode.value) {
    error.value = {
      type: 'zipCode',
      message: 'A zip code is required'
    }
  } else if (!city.value) {
    error.value = {
      type: 'city',
      message: 'A city is required'
    }
  } else if (!country.value) {
    error.value = {
      type: 'country',
      message: 'A country is required'
    }
  }

  if (error.value) {
    isWorking.value = false
  }
}
</script>

<style scoped></style>
