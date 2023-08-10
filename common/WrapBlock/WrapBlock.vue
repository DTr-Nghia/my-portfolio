<template lang="">
  <div :data-aos="dataAos ? dataAos: null" :class="size">
    <component
      :is="computedTag"
      v-bind="computedProps"
      class="group flex-none"
    >
      <div
        :class="[
          customStyle ? customStyle : 'p-[40px]',
          'bg-white rounded-[30px] relative dark:before:bg-gradient-to-br dark:bg-dark dark:before:from-[#ffffff4d] dark:before:to-[#ffffff0d] before:absolute dark:before:w-full dark:before:h-full dark:before:top-0 dark:before:left-0 dark:before:opacity-[0.25] before:rounded-[30px] dark:before:z-[1]',
        ]"
      >
          <slot></slot>
        <nuxt-img
          src="icon-2.svg"
          alt=""
          class="opacity-20 group-hover:opacity-100 transition-all duration-500 absolute lg:right-[30px] lg:bottom-[30px] xsm:right-[20px] xsm:bottom-[20px] dark:filter dark:grayscale-100 dark:contrast-[300] dark:brightness-[300]"
          :class="hasButton ? 'block' : 'hidden'"
        />
      </div>
    </component>
  </div>
</template>
<script>
export default {
  name: "WrapBlock",
  props: {
    customStyle: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    isExternal: {
      type: Boolean,
      default: false,
    },
    isLink:{
      type: Boolean,
      default: true,
    },
    link: {
      type: String,
      default: "#",
    },
    hasButton: {
      type: Boolean,
      default: true,
    },
    dataAos: {
      type: String,
      default: "zoom-in",
    },
  },
  computed: {
    computedTag() {
      return this.isExternal && this.isLink ? "a" : !this.isExternal && this.isLink?  "nuxt-link" : "div";
    },
    computedProps() {
      return this.isExternal && this.isLink
        ? { href: this.link, target: "_blank" } 
        : !this.isExternal && this.isLink ? { to: this.link } : null;
    },
  },
};
</script>
