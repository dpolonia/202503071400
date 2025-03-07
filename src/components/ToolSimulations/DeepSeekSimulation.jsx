import { motion } from "framer-motion";

const DeepSeekSimulation = ({
  analysisTitle = "Emerging Researcher Skill Requirements Analysis",
  content,
}) => {
  const defaultContent = `Analysis of 250+ job descriptions for research positions (2023-2024) reveals 
critical skill shifts in doctoral-level positions:

• 86% now explicitly mention AI collaboration skills
• 79% emphasize critical evaluation of AI-generated content
• 91% require data literacy beyond traditional statistical methods
• 68% specify prompt engineering or related skills
• 74% highlight need for ethical oversight of AI research tools

Most significant change: 3.2× increase in emphasis on "AI-human complementary 
skills" compared to 2020 position descriptions.`;

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-blue-500/50 h-full">
      <div className="flex items-center mb-3">
        <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
        <h3 className="text-lg font-medium text-white">DeepSeek Analysis</h3>
      </div>

      <div className="text-sm">
        <p className="font-medium text-blue-300">{analysisTitle}</p>
        <motion.div
          className="bg-gray-900 p-3 rounded mt-2 text-gray-200 font-mono text-xs overflow-auto max-h-[calc(100%-4rem)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {content || defaultContent}
        </motion.div>
      </div>
    </div>
  );
};

export default DeepSeekSimulation;
