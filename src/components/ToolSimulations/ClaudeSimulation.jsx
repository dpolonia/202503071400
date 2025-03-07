import { motion } from "framer-motion";

const ClaudeSimulation = ({ query, response }) => {
  // Default content if not provided
  const defaultQuery =
    "Analyze recent changes in academic publishing since the introduction of large language models";
  const defaultResponse = `Academic publishing has transformed dramatically in the last decade. 
Analysis of publication data shows:
- 213% increase in AI-supported research papers since 2020
- 45% decrease in time from submission to publication
- 67% increase in interdisciplinary collaborations
- Emergence of new validation models beyond traditional peer review`;

  return (
    <div className="bg-gray-800 rounded-lg border border-purple-500 overflow-hidden">
      <div className="bg-gray-900 p-3 flex items-center border-b border-purple-500">
        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
        <h3 className="text-lg font-medium text-white">Claude 3.7 Sonnet</h3>
      </div>

      <div className="p-4">
        <div className="mb-4 bg-gray-700 p-3 rounded text-white">
          <p className="text-sm font-medium text-gray-300">Query:</p>
          <p className="mt-1">{query || defaultQuery}</p>
        </div>

        <div className="bg-gray-700 p-3 rounded text-white">
          <p className="text-sm font-medium text-gray-300">Response:</p>
          <motion.div
            className="mt-1 font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {response || defaultResponse}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClaudeSimulation;
