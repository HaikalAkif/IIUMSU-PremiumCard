<template>
  <div class="flex flex-col h-screen">
    <nav>
      <div class="container mx-auto">
        <ul class="flex flex-wrap items-center justify-center gap-x-12 font-semibold">
          <li v-for="link of leftLinks">
            <NuxtLink :to="link.link" active-class="text-gold">
              {{ link.name }}
            </NuxtLink>
          </li>
          <li class="mx-8">
            <NuxtLink to="/">
              <img class="h-24" src="~/assets/images/su-removebg-preview.png" />
            </NuxtLink>
          </li>
          <li v-for="link of rightLinks">
            <NuxtLink :to="link.link" active-class="text-gold">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <div class="flex justify-center items-center flex-grow">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Link {
  name: string;
  link: string;
}

const leftLinks: Link[] = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Buy Now',
    link: ''
  },
  {
    name: 'Explore',
    link: ''
  }
];

const rightLinks: Link[] = [
  {
    name: 'Help',
    link: ''
  },
  {
    name: 'FAQs',
    link: ''
  },
  {
    name: 'Contact Us',
    link: '/contact'
  }
]

useHead({
  bodyAttrs: {
    class: 'bg-gray-200'
  }
})

</script>

<style scoped>

</style>