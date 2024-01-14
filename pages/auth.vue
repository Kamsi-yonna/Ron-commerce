<template>
  <div
    id="AuthPage"
    class="w-full h-[100vh] bg-white">
    <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
      <NuxtLink
        class="min-w-[170px]"
        to="/">
        <img
          src="/RonExpress-logo.png"
          width="170" />
      </NuxtLink>
    </div>

    <div clas="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6">Login / Register</div>

      <button
        class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
        @click="login('google')">
        <img
          class="w-full max-w-[30px]"
          src="/google-logo.png" />
        <div>Google</div>
      </button>

      <button
        class="mt-4 flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
        @click="login('github')">
        <img
          class="w-full max-w-[30px]"
          src="/github-logo.png" />
        <div>Github</div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// const client = useSupabaseClient()
// const user = useSupabaseUser()

// watchEffect(() => {
//   if (user.value) {
//     return navigateTo('/')
//   }
// })

// const login = async (provider) => {
//   const { data, error } = await client.auth.signInWithOAuth({
//     provider: prov,
//     redirectTo: window.location.origin
//   })
// }

const login = (provider: string) => {
  return provider
}
</script>

<style scoped></style>
