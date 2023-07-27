<template>
  <div class="max-w-[1170px] mx-auto flex gap-x-[30px] xsm:px-[20px] lg:px-0 gap-y-[30px] xsm:flex-col lg:flex-row">
    <WrapBlock
      customStyle="lg:py-[50px] lg:px-[46px] xsm:py-[40px] xsm:px-[25px]  flex gap-x-[30px] gap-y-[30px] items-center xsm:flex-col lg:flex-row"
      link="/about"
      dataAos="zoom-in"
    >
      <div class="w-[224px] bg-[#7895CB] rounded-tl-[30px] rounded-br-[30px]">
        <nuxt-img src="avatar.png" alt="avatar" class="object-cover" />
      </div>
      <div class="xsm:pr-[20px] lg:pr-[0]">
        <h4
          class="text-[14px] text-[#BCBCBC] uppercase tracking-[0.3px] leading-tight"
        >
          A Frontend Developer
        </h4>
        <h1 class="text-[36px] leading-[40px] mb-[12px]">Do Trung Nghia.</h1>
        <p class="text-[14px] text-[#BCBCBC] tracking-[0.3px] leading-tight">
          I am a Frontend Developer based in Ha Noi.
        </p>
      </div>
    </WrapBlock>
    <div>
      <WrapBlock
        customStyle="px-[25px] py-[17px] flex max-w-[500px]"
        :hasButton="false"
        dataAos="zoom-in"
      >
        <div class="overflow-hidden w-full test flex text-[12px]">
          <div class="inline-block whitespace-nowrap text-gray-300">
            LATEST WORK AND <span class="inline-block text-primary">FEATURED</span
            ><span
              class="inline-block w-[6px] h-[6px] mx-[5px] bg-gray-300 rounded-full mb-[1px]"
            ></span>
          </div>
          <div class="inline-block whitespace-nowrap text-gray-300">
            LATEST WORK AND <span class="inline-block text-primary">FEATURED</span
            ><span
              class="inline-block w-[6px] h-[6px] mx-[5px] bg-gray-300 rounded-full mb-[1px]"
            ></span>
          </div>
          <div class="inline-block whitespace-nowrap text-gray-300">
            LATEST WORK AND <span class="inline-block text-primary">FEATURED</span
            ><span
              class="inline-block w-[6px] h-[6px] mx-[5px] bg-gray-300 rounded-full mb-[1px]"
            ></span>
          </div>
          <div class="inline-block whitespace-nowrap text-gray-300">
            LATEST WORK AND <span class="inline-block text-primary">FEATURED</span
            ><span
              class="inline-block w-[6px] h-[6px] mx-[5px] bg-gray-300 rounded-full mb-[1px]"
            ></span>
          </div>
        </div>
      </WrapBlock>
    </div>
  </div>
</template>
<script>
import { computed, reactive, ref, watch } from "vue";
import WrapBlock from "@/common/WrapBlock/WrapBlock.vue";
export default {
  name: "Body",
  components: {
    WrapBlock,
  },
  setup() {
    const state = reactive({
      inputValue: "",
    });
    watch(
      () => {
        // The expression to watch
        return state.inputValue;
      },
      (newValue, oldValue) => {
        // The callback function when the value changes
        console.log("active changed:", newValue);
      }
    );
    return {
      state,
    };
  },
  mounted() {
    this.setAnimation();
  },

  methods: {
    setAnimation() {
      this.$anime({
        targets: ".test > *",
        translateX: "-100%",
        loop: true,
        duration: 4000,
        easing: "linear",
      });
    },
  },
};
</script>
<style></style>
