import { motion } from "framer-motion";
import { JSX } from "react";

const Slide01 = (): JSX.Element => {
  return (
    <div className="slide-container flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-6xl font-bold mb-4 text-white">
          AI, Research and the Future of Universities
        </h1>

        <h2 className="text-3xl text-blue-300 mb-12">
          The Post-University Era? Rethinking Knowledge Production as AI
          Approaches AGI
        </h2>

        <div className="mt-16 text-gray-300">
          <p className="text-xl">Your Name</p>
          <p>Title & Institutional Affiliation</p>
          <p className="mt-2">{new Date().toLocaleDateString()}</p>
        </div>
      </motion.div>

      {/* Background element */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent opacity-50"></div>
      </motion.div>
    </div>
  );
};

export default Slide01;
