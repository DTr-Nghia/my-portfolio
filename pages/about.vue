<template lang="">
  <div class="max-w-[1170px] mx-auto xsm:px-[20px] xl:px-0 pt-[40px]">
    <div class="flex gap-[30px] mb-[30px] lg:flex-row flex-col">
      <WrapBlock
        :hasButton="false"
        customStyle="p-[24px] "
        :isLink="false"
        size="w-[370px] flex-none mx-auto"
      >
        <div class="w-full bg-[#7895CB] rounded-[30px]">
          <img
            src="../assets/images/avatar.png"
            alt="avatar"
            class="object-cover w-full"
          />
        </div>
      </WrapBlock>
      <div class="flex flex-col">
        <Title label="Self-Summary" />
        <WrapBlock
          size="w-full flex-grow"
          customStyle="p-[24px] pt-[86px] flex gap-x-[30px] gap-y-[30px] items-center xsm:flex-col md:flex-row h-full"
          :isLink="false"
          :hasButton="false"
        >
          <div class="absolute top-0">
            <img src="../assets/images/icon-star.png" class="object-contain" />
          </div>
          <div>
            <h2
              class="text-[36px] leading-tight text-[#0F0F0F] dark:text-white font-[500] mb-[10px]"
            >
              Do Trung Nghia
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget tincidunt sem, et molestie lacus. Integer ut risus et justo
              volutpat bibendum eget sit amet felis. Integer laoreet porttitor
              neque eu vestibulum. Integer sollicitudin, nisl et sollicitudin
              ultrices, justo ante tincidunt nunc, a volutpat ligula mauris vel
              ex.
            </p>
          </div>
        </WrapBlock>
      </div>
    </div>
    <div class="flex gap-[30px] md:flex-row flex-col mb-[30px]">
      <div class="md:w-1/2 w-full" v-for="item in infoDetails">
        <WrapBlock :hasButton="false" :isLink="false" customStyle="p-[30px] h-full" size="flex-grow h-full">
          <h2 class="dark:text-white text-black mb-[20px] font-medium">
            {{ item.label }}
          </h2>
          <div v-for="el in item.content">
            <p class="text-gray-200 mb-[15px]">{{ el.time }}</p>
            <h3
              class="dark:text-white text-primary text-[18px] mb-[7px] font-medium"
            >
              {{ el.text }}
            </h3>
            <h4 class="text-gray-200 text-[14px]">{{ el.subText }}</h4>
          </div>
        </WrapBlock>
      </div>
    </div>
    <div class="flex gap-[30px] lg:flex-row flex-col">
      <WrapBlock
        customStyle="p-[24px]"
        link="/credentials"
        size="lg:w-1/4 xsm:w-full"
      >
        <div class="min-h-[116px] flex items-center">
          <img src="../assets/images/signature.png" class="my-auto" />
        </div>
        <div>
          <h4 class="text-gray-300 mb-[12px] text-[12px]">MORE ABOUT ME</h4>
          <h1 class="text-[20px] font-[500] text-black dark:text-white">
            Credentials
          </h1>
        </div>
      </WrapBlock>
      <WrapBlock
        size="lg:w-1/2 xsm:w-full flex-grow"
        customStyle="p-[24px] pt-[76px] flex gap-x-[30px] gap-y-[30px] items-center xsm:flex-col md:flex-row h-full"
        link="/contact"
      >
        <div class="absolute top-0">
          <img src="../assets/images/icon-star.png" class="object-contain" />
        </div>
        <h1
          class="text-[41px] leading-[52px] text-[#0F0F0F] dark:text-white font-[500]"
        >
          Let' s
          <br />
          work
          <span class="text-primary font-[500]"> together. </span>
        </h1>
      </WrapBlock>
      <WrapBlock
        customStyle="p-[24px]"
        link="/works"
        size="lg:w-1/4 xsm:w-full"
        dataAos="zoom-in"
      >
        <div class="min-h-[116px] flex items-center justify-center">
          <img
            src="../assets/images/my-works.png"
            class="my-auto max-h-[116px] object-contain"
          />
        </div>
        <div>
          <h4 class="text-gray-300 mb-[12px] text-[12px]">SHOW CASE</h4>
          <h1 class="text-[20px] font-[500] text-black dark:text-white">
            Projects
          </h1>
        </div>
      </WrapBlock>
    </div>
  </div>
</template>
<script>
import WrapBlock from "~/common/WrapBlock/WrapBlock.vue";
import Title from "~/common/Title/Title.vue";
export default {
  components: {
    WrapBlock,
    Title,
  },
  data() {
    return {
      infoDetails: [
        {
          label: "EXPERIENCE",
          content: [
            {
              time: "2022 - Present",
              text: "Front-End Developer",
              subText: "AHT Technology JSC",
            },
          ],
        },
        {
          label: "EDUCATION",
          content: [
            {
              time: "2017 - 2022",
              text: "Engineer's degree - Electronics and Communications Engineering",
              subText: "Posts and Telecommunications Institute of Technology",
            },
          ],
        },
      ],
    };
  },
};
</script>
