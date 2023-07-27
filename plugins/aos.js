import AOS from "aos";
import "aos/dist/aos.css";

const globalAOS = AOS.init({
  // note: your options here,
  once:true,
  easing:"ease-in-out",
  duration: 1000,
})

export default ({ app }) => {
   app.AOS = globalAOS
}
