// CUSTOM IMPORTS
import SolutionsIMAGE from "../assets/Solutions.webp";
import { motion } from "framer-motion";

function Solutions() {
  return (
    <section className="md:min-h-screen w-full flex justify-center">
      <div className="mt-0 md:mt-12 w-[930px] flex flex-col-reverse md:block mx-4.5 md:mx-12">
        <div className="my-3 md:my-0">
          <motion.p
            // SCROLL ANIMATION
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="font-semibold text-center text-xl sm:text-xl md:text-2xl lg:text-4xl md:mb-4 mb-2 lg:mb-4 text-gray1 "
          >
            We spun out of Primera Capital in 2020
          </motion.p>
          <motion.p
            // SCROLL ANIMATION
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="mb-5 md:mb-0  md:text-lg justify-self-center lg:text-2xl text-center  text-gray2"
          >
            We run as an independent financial services venture studio. Today we
            have global partnerships with financial institutions to incubate new
            fintech innovations.
          </motion.p>
        </div>
        <div className="flex flex-col items-center ">
          <motion.div
            // SCROLL ANIMATION
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="mb-2 md:mt-6 md:mb-12  bg-contain bg-center bg-no-repeat md:w-[700px] md:h-[430px]  lg:w-[930px] lg:h-[550px] h-[250px] w-full"
            style={{ backgroundImage: `url(${SolutionsIMAGE})` }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
