import styles from "../style";
import { women } from "../assets";
import {motion} from "framer-motion";
import { leftVariants, rightVariants } from "../../variants"

export const HeroSection = () => (
    
  <section id="hero" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <motion.div 
    initial="offscreen"
    whileInView={"onscreen"}
    variants={rightVariants}
    className={`flex-1 ${styles.flexStart} text:black flex-col xl:px-0 sm:px-16 px-6 text-center items-center`}>
        <br></br>
  <div className="text:black flex flex-row w-full justify-center relative">
    <h1
      className="text-black font-poppins font-semibold ss:text-[72px] text-[52px]
       ss:leading-[100.8px] leading-[75px]"
    >
      Welcome to <br className="sm:block hidden" />{" "}
      <span className="bg-clip-text text-transparent  tracking-tight bg-gradient-to-r from-green-500 via-green-600 to-green-400">YogaNiroga</span>{" "}
    </h1>
  </div>

  <h1
    className="text-grey-100 font-poppins font-semibold ss:text-[68px] text-[52px]
     ss:leading-[100.8px] leading-[75px] w-full"
  >
    Shape your Body.
  </h1>
<br></br>
  <p className="text-lg md:text-1xl text-black-300 max-w-3xl mx-auto transform transition-all duration-1200 ease-out opacity-100 translate-y-0 blur-0">
    At YogaNiroga, we offer a wide range of yoga sessions tailored to meet the unique needs and goals of individuals of all ages and body types. 
  </p>
</motion.div>

    <motion.div
    initial="offscreen"
    whileInView={"onscreen"}
    variants={leftVariants}
     className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative` }>
        <img src={women} alt="yogawomen" className="w-[100%] h-[100%] relative z-[5]"></img>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient
bottom-40" />
    </motion.div>
  </section>
);

export default HeroSection;
