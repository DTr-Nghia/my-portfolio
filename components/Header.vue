<template>
  <header
    class="bg-none w-full max-w-[1170px] mx-auto flex justify-between items-center mt-[12px] xl:px-0 xsm:px-[20px]"
  >
    <nuxt-link to="/" class="h-full w-auto block z-[16]">
      <img src="../assets/images/logo.png" class="h-[32px] object-contain"/>
    </nuxt-link>
    <ul
      class="flex lg:relative xsm:fixed lg:pt-0 lg:pb-0 xsm:pt-[100px] xsm:pb-[20px] lg:flex-row xsm:flex-col px-[12px] top-0 left-0 lg:w-auto xsm:w-full lg:gap-x-[49px] xsm:gap-y-[30px] lg:translate-y-[0] xsm:translate-y-[-100%] z-[15] duration-300 lg:bg-[transparent] xsm:bg-[#FBFBFC] dark:xsm:bg-[#0F0F0F]"
      :class="show ? '!translate-y-[0]' : ''"
    >
      <li
        v-for="item in items"
        class="lg:py-[26px] xsm:px-0 text-gray-600 hover:text-primary duration-300 cursor-pointer header-link text-center"
      >
        <nuxt-link :to="item.slug">
          {{ item.label }}
        </nuxt-link>
      </li>
      <li
        class="lg:py-[26px] xsm:px-0 text-gray-600 hover:text-primary duration-300 cursor-pointer header-link lg:hidden xsm:block text-center"
      >
        <nuxt-link to="/contact"> Contact </nuxt-link>
      </li>
    </ul>
    <div class="flex items-center gap-[24px] z-[16]">
      <button @click="changeMode" :title="this.$colorMode.preference === 'dark' ? 'light' : 'dark'">
        <img :src="this.$colorMode.preference === 'dark' ? require('../assets/images/lightMode.svg') :  require('../assets/images/darkMode.svg')" />
      </button>
      <button
        type="button"
        class="text-white bg-black border-none h-fit rounded-[16px] hover:bg-primary duration-300 lg:block xsm:hidden"
      >
        <nuxt-link to="/contact" class="px-[30px] py-[12px] block h-fit">
          Let's talk
        </nuxt-link>
      </button>
      <div
        class="lg:hidden xsm:flex w-[25px] h-[18px] flex-col justify-between z-[16]"
        @click="handleShowNav"
      >
        <span
          class="w-full h-[1px] bg-[#0f0f0f] dark:bg-white block duration-300"
          :class="show ? 'rotate-45 translate-y-[10px]' : ''"
        ></span>
        <span
          class="w-full h-[1px] bg-[#0f0f0f] dark:bg-white block duration-300"
          :class="show ? 'scale-0' : ''"
        ></span>
        <span
          class="w-full h-[1px] bg-[#0f0f0f] dark:bg-white block duration-300"
          :class="show ? 'rotate-[-45deg] translate-y-[-7px]' : ''"
        ></span>
      </div>
    </div>
  </header>
</template>
<script>
import { computed, reactive, ref, watch } from "vue";
import { defineAsyncComponent } from "vue";
const Button = defineAsyncComponent(() =>
  import("../common/Button/Button.vue")
);
export default {
  name: "Header",
  setup() {
    const show = ref(false);
    const items = ref([
      { label: "Home", slug: "/" },
      { label: "About", slug: "/about" },
      { label: "Works", slug: "/works" },
    ]);
    const handleShowNav = () => {
      show.value = !show.value;
    };
    return {
      show,
      items,
      handleShowNav,
    };
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    }
  }
};
</script>
