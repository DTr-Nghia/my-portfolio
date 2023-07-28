<template lang="">
  <div :data-aos="dataAos" :class="size">
    <component :is="computedTag" v-bind="computedProps" class="group flex-none w-fit" >
      <div
        :class="[
          customStyle ? customStyle : 'p-[40px]',
          'bg-white rounded-[30px] relative',
        ]"
      >
        <slot></slot>
        <nuxt-img
          src="icon-2.svg"
          alt=""
          class="opacity-20 group-hover:opacity-100 transition-all duration-500 absolute lg:right-[30px] lg:bottom-[30px] xsm:right-[20px] xsm:bottom-[20px]"
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
      type:String,
      default:""
    },
    isExternal: {
      type: Boolean,
      default: false,
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
      type:String,
      default:'zoom-in'
    }
  },
  computed: {
    computedTag() {
      return this.isExternal ? "a" : "nuxt-link";
    },
    computedProps() {
      return this.isExternal
        ? { href: this.link, target: "_blank" }
        : { to: this.link };
    },
  },
};
</script>
