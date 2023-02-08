<script lang="ts" setup></script>

<template>
    <div class="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div class="flex flex-col justify-center grow">
        <slot />
      </div>
      <Footer></Footer>
    </div>
</template>

<style scoped></style>
