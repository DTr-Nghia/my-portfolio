<template lang="">
  <div class="pt-[70px] pb-[40px]">
    <div class="h-[32px] text-center">
      <nuxt-img src="logo.png" alt="logo" class="h-full mx-auto" />
    </div>
    <ul class="flex items-center justify-center gap-[44px] mt-[33px] mb-[37px]">
      <li v-for="item in linkList" >
        <nuxt-link :to="item.slug" class="text-gray-600 text-[12px] uppercase font-semibold hover:text-primary transition-all duration-500">
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
    <div class="text-center text-[14px] text-gray-300 font-medium">Copyright © 2023</div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  setup() {
    const linkList = [
      { label: "Home", slug: "/" },
      { label: "About", slug: "/about" },
      { label: "Works", slug: "/works" },
      { label: "Contact", slug: "/contact" },
    ];
    return {
      linkList,
    };
  },
};
</script>
