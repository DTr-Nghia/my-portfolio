<template>
  <div class="max-w-[1170px] mx-auto xsm:px-[20px] xl:px-0 ">
    <section
      class="flex gap-x-[30px] gap-y-[30px] xsm:flex-col lg:flex-row mb-[24px]"
    >
      <WrapBlock
        customStyle="lg:py-[50px] lg:px-[40px] xsm:py-[40px] xsm:px-[25px]  flex gap-x-[30px] gap-y-[30px] items-center xsm:flex-col lg:flex-row h-full"
        link="/about"
        size="lg:w-1/2 xsm:w-full flex-grow"
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
      <div class="lg:w-1/2 xsm:w-full ">
        <WrapBlock
          customStyle="px-[25px] py-[17px] flex cursor-auto"
          :hasButton="false"
          size="w-full"
          link=""
        >
          <div class="overflow-hidden w-full test flex text-[12px]">
            <div
              v-for="item in listFeatured"
              class="inline-block whitespace-nowrap text-gray-300"
            >
              {{ item.firstText }}
              <span class="inline-block text-primary">{{ item.lastText }}</span
              ><span
                class="inline-block w-[6px] h-[6px] mx-[5px] bg-gray-300 rounded-full mb-[1px]"
              ></span>
            </div>
          </div>
        </WrapBlock>
        <div class="flex gap-x-[30px] gap-y-[30px] mt-[30px] xsm:flex-col md:flex-row">
          <WrapBlock customStyle="p-[24px]" link="/credentials" size="lg:w-1/2 xsm:w-full" >
            <div class="min-h-[116px] flex items-center ">
              <nuxt-img src="signature.png" class="my-auto"/>
            </div>
            <div>
              <h4 class="text-gray-300 mb-[12px] text-[12px]">
                MORE ABOUT ME
              </h4>
              <h1 class="text-[20px] font-[500] text-black">
                Credentials
              </h1>
            </div>
          </WrapBlock>
          <WrapBlock customStyle="p-[24px]" link="/works" size="lg:w-1/2 xsm:w-full" dataAos="zoom-in">
            <div class="min-h-[116px] flex items-center justify-center">
              <nuxt-img src="my-works.png" class="my-auto max-h-[116px] object-contain"/>
            </div>
            <div>
              <h4 class="text-gray-300 mb-[12px] text-[12px]">
                SHOW CASE
              </h4>
              <h1 class="text-[20px] font-[500] text-black">
                Projects
              </h1>
            </div>
          </WrapBlock>
        </div>
      </div>
    </section>
    <section class="flex gap-x-[30px] gap-y-[30px] xsm:flex-col lg:flex-row">
      <WrapBlock size="lg:w-1/2 xsm:w-full flex-grow" :hasButton="false" customStyle="p-[24px] flex gap-x-[30px] gap-y-[30px] items-center xsm:flex-col md:flex-row h-full">
        <div>
          
        </div>
      </WrapBlock>
      <WrapBlock size="lg:w-1/2 xsm:w-full flex-grow" customStyle="p-[24px] pt-[76px] flex gap-x-[30px] gap-y-[30px] items-center xsm:flex-col md:flex-row h-full" link="/contact">
        <div class="absolute top-0">
              <nuxt-img src="icon-star.png" class="object-contain"/>
        </div>
        <h1 class="text-[41px] leading-[52px] text-[#0F0F0F] font-[500]">
          Let' s
          <br/>
          work
          <span class="text-primary font-[500]">
            together.
          </span>
        </h1>
      </WrapBlock>
    </section>
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
    const listFeatured = [
      { firstText: "WELCOME TO MY", lastText: "PORTFOLIO" },
      { firstText: "WELCOME TO MY", lastText: "PORTFOLIO" },
      { firstText: "WELCOME TO MY", lastText: "PORTFOLIO" },
      { firstText: "WELCOME TO MY", lastText: "PORTFOLIO" },
    ];
    watch(
      () => {
        // The expression to watch
        return state.inputValue;
      },
      (newValue, oldValue) => {
        // The callback function when the value changes
      }
    );
    return {
      state,
      listFeatured,
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
