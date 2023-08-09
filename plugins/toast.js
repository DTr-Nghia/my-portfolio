import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  timeout: 5000,
  closeOnClick: true,
  hideProgressBar: false,
  closeButton: "button",
});