import { motion } from "framer-motion";
import { JSX } from "react";

const Slide44 = (): JSX.Element => {
  return (
    <div className="slide-container flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center z-10"
      >
        <h1 className="text-5xl font-bold mb-8 text-white">
          Shaping the Future of Knowledge
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/50 mb-10"
        >
          <p className="text-xl text-gray-200 leading-relaxed">
            "As we navigate this transformative era, doctoral students in
            business innovation have a unique opportunity to pioneer new
            approaches to research, reshape knowledge production processes, and
            redefine the university's role in society.
          </p>
          <p className="text-xl text-gray-200 leading-relaxed mt-4">
            The most valuable skill may be the ability to orchestrate the dance
            between human creativity and artificial intelligence—creating
            meaningful knowledge that shapes our collective future."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-gray-300"
        >
          <p className="text-xl">Your Name</p>
          <p>email@example.com | professional-site.com</p>
          <p className="mt-4">Scan QR code for presentation resources</p>
          <div className="mt-2 flex justify-center">
            <div className="w-24 h-24 bg-white p-1 rounded">
              {/* This would be a QR code in the real implementation */}
              <div className="w-full h-full bg-gray-800"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background element */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div className="w-full h-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-900 to-black opacity-70"></div>
      </motion.div>
    </div>
  );
};

export default Slide44;
