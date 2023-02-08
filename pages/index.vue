<script lang="ts" setup>
  useHead({
    title: 'IIUMSU | Premium Card'
  })
</script>

<template>
  <NuxtLayout name="main">
    <div class="flex justify-between w-2/3 mx-auto items-center">
      <div class="title">
        <h1 class="text-6xl font-bold mb-6 leading-tight">
          One Card For<br>Everything
        </h1>
        <p class="text-xl mb-6">Get your item cheaper with a<br>single (nice-looking) card.</p>
        <NuxtLink to="#">
          Read More
        </NuxtLink>
      </div>
      <div class="-rotate-6">
        <img class="h-80 rounded-3xl animate-card-float rotate-45" src="~/assets/images/frontard.jpg" alt=""/>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
