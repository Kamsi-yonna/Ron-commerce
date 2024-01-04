<template>
  <div>
    <client-only>
      <input
        v-model="inputComputed"
        autocomplete="off"
        class="w-full bg-white text-gray-800 border text-sm border-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none"
        :class="({ 'border-gray-900': isFocused }, { 'border-red-500': error })"
        :maxlength="max"
        :placeholder="placeholder"
        :type="inputType"
        @blur="isFocused = false"
        @focus="isFocused = true" />
    </client-only>
    <span
      v-if="error"
      class="text-red-500 text-[14px] font-semibold">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:input'])

const props = defineProps({
  input: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  max: {
    type: String,
    default: ''
  },
  inputType: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})

const { input, placeholder, max, inputType, error } = toRefs(props)

const isFocused = ref(false)

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val)
})
</script>
