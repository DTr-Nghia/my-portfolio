<template lang="">
  <div class="max-w-[1170px] mx-auto xsm:px-[20px] xl:px-0 pt-[40px]">
    <div
      class="flex lg:text-[74px] md:text-[56px] uppercase text-[26px] mb-[20px] font-semibold items-center justify-center gap-[10px]"
    >
      <img src="../assets/images/star-2.png" alt="" class="flex-none xsm:w-[25px] md:w-auto" />
      <h1 class="text-dark dark:text-white">Some Projects</h1>
      <img src="../assets/images/star-2.png" alt="" class="flex-none xsm:w-[25px] md:w-auto" />
    </div>
    <div class="grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="item in listWorks" class="flex flex-col gap-4 align-top">
        <div v-for="el in item">
          <WrapBlock
            customStyle="p-[16px] pb-[26px]"
            :link="el.link"
            :isExternal="true"
            size="h-full"
          >
          <div class="mb-[16px] rounded-[30px] ">
              <img
                class="max-w-full w-full rounded-[30px]  object-cover my-auto "
                :src="el.image"
                :alt="el.projectName"
              />
            </div>
            <h3
              class="text-gray-200 text-sm uppercase opacity-50 mb-[2px] leading-tight"
            >
              {{ el.position }}
            </h3>
            <h4
              class="text-[22px] dark:text-white text-black leading-tight opacity-90 font-medium"
            >
              {{ el.projectName }}
            </h4>
          </WrapBlock>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WrapBlock from "@/common/WrapBlock/WrapBlock.vue";
export default {
  components: {
    WrapBlock,
  },
  data() {
    return {
      listWorks: [
        [
          {
            projectName: "AHT Global Site",
            position: "Web Developer",
            image: require("../assets/images/aht.webp"),
            link: "https://global.arrowhitech.com/",
          },
          {
            projectName: "Nextrend Furniture",
            position: "Web Developer",
            image: require("../assets/images/nextrend.webp"),
            link: "https://nextrend.com.au/",
          },
        ],
        [
          {
            projectName: "Ester Spirits",
            position: "Web Developer",
            image: require("../assets/images/ester.png"),
            link: "https://esterspirits.com.au/",
          },
          {
            projectName: "iONAH",
            position: "Web Developer",
            image: require("../assets/images/ionah.webp"),
            link: "https://ionah.com/",
          },
        ],
        [
          {
            projectName: "Backa Australia",
            position: "Web Developer",
            image: require("../assets/images/backa.png"),
            link: "https://backa.com.au/",
          },
          {
            projectName: "Concierge Car Wash",
            position: "Web Developer",
            image: require("../assets/images/carwash.png"),
            link: "https://conciergecarwash.com.au/",
          },
        ],
      ],
    };
  },
};
</script>
<style lang=""></style>
