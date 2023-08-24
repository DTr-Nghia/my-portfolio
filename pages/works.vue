<template lang="">
  <div class="max-w-[1170px] mx-auto xsm:px-[20px] xl:px-0 pt-[40px]">
    <Title label="Some Projects"/>
    <div class="grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(item,index) in listWorks" :key="index" class="flex flex-col gap-4 align-top">
        <div v-for="(el,idx) in item" :key="idx">
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
              class="text-gray-200 text-sm uppercase dark:opacity-50 mb-[2px] leading-tight"
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
import Title from "~/common/Title/Title.vue";
export default {
  components: {
    WrapBlock,
    Title,
  },
  data() {
    return {
      listWorks: [
        [
          {
            projectName: "AHT Global Site",
            position: "Web Developer",
            image: "https://i.ibb.co/T8gzmM2/aht.webp",
            link: "https://global.arrowhitech.com/",
          },
          {
            projectName: "Nextrend Furniture",
            position: "Web Developer",
            image: "https://i.ibb.co/56hk87k/nextrend.webp",
            link: "https://nextrend.com.au/",
          },
        ],
        [
          {
            projectName: "Ester Spirits",
            position: "Web Developer",
            image: "https://i.ibb.co/NS3MYdZ/ester.png",
            link: "https://esterspirits.com.au/",
          },
          {
            projectName: "iONAH",
            position: "Web Developer",
            image: "https://i.ibb.co/S3RqDn0/ionah.webp",
            link: "https://ionah.com/",
          },
        ],
        [
          {
            projectName: "Backa Australia",
            position: "Web Developer",
            image: "https://i.ibb.co/BBBNx2z/backa.png",
            link: "https://backa.com.au/",
          },
          {
            projectName: "Concierge Car Wash",
            position: "Web Developer",
            image: "https://i.ibb.co/nDFVmFr/carwash.png",
            link: "https://conciergecarwash.com.au/",
          },
        ],
      ],
    };
  },
};
</script>
<style lang=""></style>
