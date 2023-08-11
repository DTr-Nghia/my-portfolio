<template lang="">
  <div class="max-w-[1170px] mx-auto xsm:px-[20px] xl:px-0 pt-[40px]">
    <div class="flex gap-[24px] justify-between xsm:flex-col lg:flex-row">
      <div class="max-w-[290px]">
        <h1
          data-aos="fade-up"
          class="mb-[29px] dark:text-white text-black uppercase"
        >
          Contact Info
        </h1>
        <ul class="mb-[55px]">
          <li
            v-for="item in contactInfo"
            class="flex gap-[24px] items-center [&:not(:last-child)]:mb-[70px]"
            data-aos="zoom-in"
          >
            <WrapBlock
              :hasButton="false"
              customStyle="p-[22px] !rounded-[10px] before:!rounded-[10px] cursor-auto min-w-[68px]"
              link=""
              dataAos=""
              :isLink="false"
            >
              <img
                :src="item.image"
                class="dark:filter dark:grayscale-100 dark:contrast-[300] dark:brightness-[300]"
              />
            </WrapBlock>
            <div>
              <span class="text-gray-400">{{ item.label }}</span>
              <h4 v-for="el in item.info" class="dark:text-white text-black">
                <a :href="el.link" :target="el.target">
                  {{ el.label }}
                </a>
              </h4>
            </div>
          </li>
        </ul>
        <h1
          data-aos="fade-up"
          class="mb-[29px] dark:text-white text-black uppercase"
        >
          Social Info
        </h1>
        <ul data-aos="zoom-in">
          <li v-for="item in socialInfo">
            <WrapBlock
              :hasButton="false"
              customStyle="p-[0] !rounded-[50%] before:!rounded-[50%]  flex items-center justify-center dark:hover:bg-white group w-full h-full transition-all duration-500"
              :isExternal="true"
              link="https://www.facebook.com/"
              dataAos=""
              size="w-[82px] h-[82px] "
            >
              <img
                :src="item.image"
                class="dark:filter dark:grayscale-100 dark:contrast-[300] dark:brightness-[300] dark:group-hover:grayscale-0 dark:group-hover:contrast-[100] dark:group-hover:brightness-[0]"
              />
            </WrapBlock>
          </li>
        </ul>
      </div>
      <ContactForm/>
    </div>
  </div>
</template>
<script>
import WrapBlock from "@/common/WrapBlock/WrapBlock.vue";
import ContactForm from "~/components/ContactForm.vue";
export default {
  components: {
    WrapBlock,
    ContactForm
  },
  setup() {
    const contactInfo = [
      {
        label: "MAIL",
        info: [
          {
            label: "trungnghia.work72@gmail.com",
            link: "mailto:trungnghia.work72@gmail.com",
            target:"_self",
          },
          { label: "zeder1999@gmail.com", link: "mailto:zeder1999@gmail.com",target:"_self", },
        ],
        image: require("../assets/images/mail.svg"),
      },
      {
        label: "CONTACT",
        info: [{ label: "+84 974603499", link: "tel:+84 974603499",target:"_self", }],
        image: require("../assets/images/phone.svg"),
      },
      {
        label: "LOCATION",
        info: [
          {
            label: "Ngoc Lam Ward, Long Bien District, Ha Noi City",
            link: "https://www.google.com/maps/dir//Ng%E1%BB%8Dc+L%C3%A2m,+Long+Bi%C3%AAn,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0459727,105.8728724,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3135abd42b7a1e49:0x1e1f1d825c951449!2m2!1d105.8729199!2d21.0461802!3e0?hl=vi-VN&entry=ttu",
            target:"_blank",
          },
        ],
        image: require("../assets/images/pin-alt.svg"),
      },
    ];
    const socialInfo = [
      {
        label: "Facebook",
        image: require("../assets/images/facebook.svg"),
      },
    ];
    return {
      contactInfo,
      socialInfo,
    };
  },
};
</script>
