<template>
  <header class="bg-none w-full max-w-[1170px] mx-auto flex justify-between items-center mt-[12px]  xl:px-0 xsm:px-[20px]">
    <ul  class="flex lg:relative xsm:fixed lg:pt-0 xsm:pt-[100px] lg:flex-row xsm:flex-col px-[12px] top-0 left-0 lg:w-auto xsm:w-full lg:gap-x-[49px] xsm:gap-y-[30px] ">
      <li v-for="item in items"  class="lg:py-[26px] xsm:px-0 text-gray-400 hover:text-primary duration-300 cursor-pointer header-link text-center">
        <nuxt-link :to="item.slug" >
          {{ item.label }}
        </nuxt-link>
      </li>
      <li class="lg:py-[26px] xsm:px-0 text-gray-400 hover:text-primary duration-300 cursor-pointer header-link lg:hidden xsm:block text-center">
        <nuxt-link to="/contact" >
          Contact
        </nuxt-link>
      </li>
    </ul>
    <button type="button" class=" text-white bg-black border-none h-fit rounded-[16px] hover:bg-primary duration-300 lg:block xsm:hidden">
      <nuxt-link to="/contact" class="px-[30px] py-[12px] block h-fit">
        Let's talk
      </nuxt-link>
    </button>
    <div class="lg:hidden xsm:block">
      <span></span>
      <span></span>
      <span></span>
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
    const state = reactive({
      active: 0,
    });
    const items = ref([{label:"Home",slug:"/"}, {label:"About",slug:"/about"}, {label:"Works",slug:"/works"}]);

    const handleActive = (id) => {
      state.active = id;
    };

    const abc = computed(() => {
      // Logic cập nhật trạng thái abc dựa trên trạng thái active ở đây
      return state.active * 2;
    });

    watch(
      () => {
        // The expression to watch
        return state.active;
      },
      (newValue, oldValue) => {
        // The callback function when the value changes
        console.log("active changed:", newValue);
      }
    );
    return {
      state,
      items,
      handleActive,
    };
  },
};
</script>
