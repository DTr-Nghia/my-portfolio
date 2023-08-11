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
          this.$colorMode.preference === 'dark' ? 'dark-mode-overlay' : '',
          'bg-white rounded-[30px] relative dark:bg-dark ',
        ]"
      >
          <slot></slot>
        <img
          src="../../assets/images/icon-2.svg"
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
