<template lang="">
  <div class="relative">
    <div class="lg:sticky relative lg:top-[15%] md:w-[370px] xsm:w-full mx-auto">
      <WrapBlock
        :hasButton="false"
        :isLink="false"
        customStyle="p-[24px] pb-[34px] text-center"
      >
        <div class="w-full bg-[#7895CB] rounded-[30px] mb-[40px] z-[5]">
          <img
            src="../assets/images/avatar.png"
            alt="avatar"
            class="object-cover"
          />
        </div>
        <h2
          class="text-[26px] dark:text-white text-black leading-tight mb-[8px] font-medium z-[5]"
        >
          Do Trung Nghia
        </h2>
        <p class="text-gray-200 dark:opacity-50 text-[16px] mb-[34px] z-[5]">
          @nghiadt
        </p>
        <ul class="flex justify-center z-[5] gap-[10px] mb-[36px]">
          <li v-for="item in socialInfo">
            <WrapBlock
              :hasButton="false"
              customStyle="p-[0] !rounded-[50%] before:!rounded-[50%]  flex items-center justify-center dark:hover:bg-white group/socials w-full h-full transition-all duration-500"
              :isExternal="true"
              :link="item.link"
              dataAos=""
              size="w-[50px] h-[50px] "
            >
              <img
                :src="item.image"
                class="dark:grayscale-100 dark:contrast-[300] dark:brightness-[300] dark:group-hover/socials:grayscale-0 dark:group-hover/socials:contrast-[100] dark:group-hover/socials:brightness-[0] dark:filter"
              />
            </WrapBlock>
          </li>
        </ul>
        <nuxt-link
          to="/contact"
          class="z-[5] cursor-pointer relative block w-full bg-black text-white dark:hover:bg-white dark:hover:text-dark 
          hover:bg-primary py-[12px] px-[30px] rounded-[16px] transition-all duration-500 font-medium text-[16px]"
        >
          Contact me
        </nuxt-link>
      </WrapBlock>
    </div>
  </div>
</template>
<script>
import WrapBlock from "~/common/WrapBlock/WrapBlock.vue";
export default {
  components: {
    WrapBlock,
  },
  data() {
    return {
      socialInfo: [
        {
          label: "Facebook",
          image: require("../assets/images/facebook.svg"),
          link:"https://www.facebook.com/"
        },
        {
          label: "Linkedin",
          image: require("../assets/images/linkin.svg"),
          link:"https://www.linkedin.com/in/nghia-do-09239a195/"
        },
      ],
    };
  },
};
</script>
