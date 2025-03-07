import { useState } from "react";
import { motion } from "framer-motion";

const VevoxPoll = ({ question, options }) => {
  const [results, setResults] = useState(null);
  const [isActive, setIsActive] = useState(false);

  // Default question and options if not provided
  const defaultQuestion =
    "Which aspect of AI's impact on research do you find most concerning/exciting?";
  const defaultOptions = [
    { label: "Democratization of research capabilities", percent: 35 },
    { label: "Acceleration of knowledge production cycles", percent: 25 },
    { label: "Transformation of researcher skills and roles", percent: 20 },
    { label: "Changes to knowledge validation processes", percent: 15 },
    { label: "Ethical implications of AI-augmented research", percent: 5 },
  ];

  // Use provided options or defaults
  const pollOptions = options || defaultOptions;

  // Simulate poll results
  const startPoll = () => {
    setIsActive(true);
    setTimeout(() => {
      setResults(pollOptions);
    }, 3000);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-blue-500/50">
      <h3 className="text-xl font-medium text-white mb-4">
        {question || defaultQuestion}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          {/* QR code placeholder - in a real implementation, use react-qr-code */}
          <div className="w-24 h-24 bg-white p-1 rounded">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-800">
              QR Code
            </div>
          </div>
          <p className="text-sm mt-2 text-gray-300">Scan to participate</p>
          <button
            onClick={startPoll}
            className={`mt-4 px-4 py-2 rounded ${
              isActive
                ? "bg-gray-600 text-gray-300"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
            disabled={isActive}
          >
            {isActive ? "Poll Active" : "Start Poll"}
          </button>
        </div>

        <div>
          {results ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {results.map((option, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300 truncate">
                      {option.label}
                    </span>
                    <span className="text-gray-300">{option.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${option.percent}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <p className="text-gray-500 italic">
              {isActive ? "Waiting for responses..." : "Poll not started"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VevoxPoll;
