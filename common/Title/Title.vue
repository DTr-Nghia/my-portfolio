<template lang="">
  <div
    class="flex lg:text-[74px] md:text-[56px] uppercase text-[26px] mb-[20px] font-semibold items-center justify-center gap-[10px]"
  >
    <img
      src="../../assets/images/star-2.png"
      alt=""
      class="flex-none xsm:w-[25px] md:w-auto"
    />
    <h1 class="text-dark dark:text-white">{{ label }}</h1>
    <img
      src="../../assets/images/star-2.png"
      alt=""
      class="flex-none xsm:w-[25px] md:w-auto"
    />
  </div>
</template>
<script>
    export default {
        name: "Title",
        props: {
            label: {
                type:String,
                default: "",
            },
        }
    }
</script>