<template lang="">
  <div class="max-w-[765px] w-full" data-aos="zoom-in">
    <WrapBlock
      :hasButton="false"
      customStyle="cursor-auto md:p-[40px] xsm:p-[20px] z-[2]"
      link=""
      dataAos=""
      :isLink="false"
    >
      <div class="absolute top-0 right-[40px]">
        <nuxt-img src="icon-star.png" class="object-contain" />
      </div>
      <h1
        class="mb-[30px] text-[44px] leading-tight dark:text-white text-black"
      >
        Let's work <span class="text-primary">together</span>
      </h1>
      <form class="flex flex-col gap-[16px]">
        <Input
          name="name"
          type="text"
          v-model="state.formState.name"
          placeholder="Name*"
          :error="state.errorMessages?.name"
        />
        <Input
          name="email"
          type="email"
          v-model="state.formState.email"
          placeholder="Email*"
          :error="state.errorMessages?.email"
        />
        <Input
          name="subject"
          type="text"
          v-model="state.formState.subject"
          placeholder="Your Subject*"
          :error="state.errorMessages?.subject"
        />
        <textarea
          name="message"
          placeholder="Your Message*"
          v-model="state.formState.message"
          class="bg-[#FBFBFC] z-[5] py-[17px] px-[20px] relative dark:bg-transparent dark:bg-gradient-to-br dark:from-[#ffffff0d] dark:to-[#ffffff03] rounded-[10px] resize-none w-full h-[145px] outline-none border-none"
        ></textarea>
        <p
          class="text-[#FF3333] text-[14px] p-[5px]"
          :class="state.errorMessages?.message ? 'block' : 'hidden'"
        >
          {{ state.errorMessages?.message }}
        </p>
        <button
          type="button"
          class="px-[30px] py-[16px] text-[16px] rounded-[10px] bg-black z-[10] dark:text-white text-white transition-all duration-500"
          :class="state.loading ? 'cursor-auto' : 'hover:bg-primary dark:hover:bg-white dark:hover:text-black'"
          @click="onSubmit"
          :disabled="state.loading"
        >
          Send Message
        </button>
      </form>
    </WrapBlock>
  </div>
</template>
<script>
import WrapBlock from "@/common/WrapBlock/WrapBlock.vue";
import Input from "@/common/Input/Input.vue";
import emailjs from "@emailjs/browser";
export default {
  components: {
    WrapBlock,
    Input,
  },
  data() {
    return {
      state: {
        formState: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
        errorMessages: {},
        loading: false,
      },
    };
  },
  methods: {
    validate() {
      const message = {};
      for (const key in this.state.formState) {
        if (this.state.formState[key] === "") {
          message[key] = "This field cannot be empty";
        } else {
          delete message[key]; // Clear the error message if the field is not empty
        }
      }
      this.state.errorMessages = message;
      return message;
    },
    onSubmit() {
      const message = this.validate();
      this.state.loading = true;
      if (Object.keys(message).length === 0) {
        emailjs
          .send(
            "service_0ckybfy",
            "template_1yn0s9q",
            {
              from_name: this.state.formState.name,
              your_subject: this.state.formState.subject,
              your_email: this.state.formState.email,
              message: this.state.formState.message,
            },
            "h83dnuzN7C12wDGrn"
          )
          .then(
            (result) => {
              this.state.loading = false;
              this.state.formState = {
                name: "",
                email: "",
                subject: "",
                message: "",
              };
              this.$toast.success("Thank you for your contact");
            },
            (error) => {
              this.state.loading = false;
              this.$toast.success("Something errors...");
            }
          );
      }
    },
  },
};
</script>
