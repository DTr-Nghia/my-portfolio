<template lang="">
  <div>
    <div class="mb-[110px]" data-aos="fade-up">
      <h2
        class="text-black dark:text-white text-[18px] uppercase mb-[37px] font-medium"
      >
        About me
      </h2>
      <p
        class="text-black dark:text-white text-[16px] mb-[30px] leading-[1.56] opacity-80"
      >
        I'm a front-end developer with 1.5 years of focused experience in
        building captivating web interfaces using ReactJS. Throughout my
        journey, I've become well-versed in harnessing the power of React along
        with my proficiency in HTML, CSS, and JavaScript.
      </p>
      <p
        class="text-black dark:text-white text-[16px] leading-[1.56] opacity-80"
      >
        In my 1.5 years of practice, I've adeptly navigated React's
        component-based architecture, state management, and routing, allowing me
        to collaborate seamlessly with design and back-end teams to create
        cohesive and high-performing web applications. I'm committed to staying
        current with the latest React trends and techniques, ensuring that I
        deliver modern, user-centric, and responsive solutions that make a
        meaningful impact.
      </p>
    </div>
    <div v-for="(item,index) in infoDetails" :key="index" class="mb-[85px]" data-aos="fade-up">
      <h2
        class="text-black dark:text-white text-[18px] uppercase mb-[22px] font-medium"
      >
        {{ item.label }}
      </h2>
      <div v-for="(el,idx) in item.content" :key="idx">
        <h4 class="text-gray-200 dark:opacity-60 text-[16px] font-medium">
          {{ el.time }}
        </h4>
        <h3 class="text-primary text-[18px] font-medium">{{ el.text }}</h3>
        <h5 class="text-gray-200 dark:opacity-60 text-[14px]">
          {{ el.subText }}
        </h5>
      </div>
    </div>
    <div class="mb-[85px]" data-aos="fade-up">
      <h2
        class="text-black dark:text-white text-[18px] uppercase mb-[24px] font-medium"
      >
        Skills
      </h2>
      <ul class="grid grid-cols-2 gap-[24px]">
        <li v-for="(item,index) in listSkills" :key="index">
            <h3 class="text-black dark:text-white text-[18px]">{{item.name}}</h3>
            <h4 class="text-[14px] text-gray-200 dark:opacity-80">{{item.level}}</h4>
        </li>
      </ul>
    </div>
    <div data-aos="fade-up">
      <h2
        class="text-black dark:text-white text-[18px] uppercase mb-[24px] font-medium"
      >
        Certifications
      </h2>
      <ul class="flex flex-col gap-[24px]">
        <li v-for="(item,index) in listCertification" :key="index">
            <h4 class="text-[16px] text-gray-200 dark:opacity-80 mb-[7px]">{{item.time}}</h4>
            <h3 class="text-black dark:text-white text-[18px]">{{item.name}}</h3>
            <h4 class="text-[14px] text-gray-200 dark:opacity-80">{{item.level}}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
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
      listSkills: [
        { name: "Javascript", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Gatsby", level: "Advanced" },
        { name: "HTML, CSS", level: "Advanced" },
        { name: "NextJs", level: "Intermediate" },
        { name: "VueJS/NuxtJs", level: "Basic" },
        { name: "Shopify", level: "Basic" },
      ],
      listCertification: [
        {time:'24 February 2021',name:'Toeic',level:'590 Points'}
      ]
    };
  },
};
</script>
