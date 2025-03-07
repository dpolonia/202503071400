import { motion } from "framer-motion";
import { JSX } from "react";

// Define interfaces for our data structures
interface Skill {
  name: string;
  description: string;
}

interface SkillQuadrantProps {
  title: string;
  skills: Skill[];
  delay: number;
}

// Skill Quadrant Component
const SkillQuadrant = ({
  title,
  skills,
  delay,
}: SkillQuadrantProps): JSX.Element => {
  return (
    <motion.div
      className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-4 border border-blue-500/50"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-xl font-bold text-blue-300 mb-3">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 * index }}
          >
            <div className="mr-2 text-blue-400 text-lg">•</div>
            <div>
              <p className="font-medium text-white">{skill.name}</p>
              <p className="text-sm text-gray-300">{skill.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

// DeepSeek Simulation Component
const DeepSeekOutput = (): JSX.Element => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-blue-500/50 h-full">
      <div className="flex items-center mb-3">
        <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
        <h3 className="text-lg font-medium text-white">DeepSeek Analysis</h3>
      </div>

      <div className="text-sm">
        <p className="font-medium text-blue-300">
          Emerging Researcher Skill Requirements
        </p>
        <motion.div
          className="bg-gray-900 p-3 rounded mt-2 text-gray-200 font-mono text-xs overflow-auto max-h-[calc(100%-4rem)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Analysis of 250+ job descriptions for research positions (2023-2024)
          reveals critical skill shifts in doctoral-level positions:
          <br />
          <br />
          • 86% now explicitly mention AI collaboration skills
          <br />
          • 79% emphasize critical evaluation of AI-generated content
          <br />
          • 91% require data literacy beyond traditional statistical methods
          <br />
          • 68% specify prompt engineering or related skills
          <br />
          • 74% highlight need for ethical oversight of AI research tools
          <br />
          <br />
          Most significant change: 3.2× increase in emphasis on "AI-human
          complementary skills" compared to 2020 position descriptions.
        </motion.div>
      </div>
    </div>
  );
};

// Main Slide Component
const Slide29 = (): JSX.Element => {
  // Skill data
  const technicalCreationSkills: Skill[] = [
    {
      name: "Prompt Engineering",
      description: "Designing effective queries to elicit useful AI outputs",
    },
    {
      name: "Workflow Integration",
      description: "Embedding AI tools within research processes",
    },
    {
      name: "Multimodal Research Design",
      description: "Leveraging AI across text, image, data modalities",
    },
  ];

  const conceptualCreationSkills: Skill[] = [
    {
      name: "Problem Identification",
      description: "Recognizing valuable questions beyond AI capabilities",
    },
    {
      name: "Cross-Domain Connection",
      description: "Linking concepts across disciplinary boundaries",
    },
    {
      name: "Value-Based Prioritization",
      description: "Directing research based on human values and needs",
    },
  ];

  const technicalEvaluationSkills: Skill[] = [
    {
      name: "Output Verification",
      description: "Validating AI-generated content and findings",
    },
    {
      name: "Limitation Recognition",
      description: "Identifying constraints and blind spots in AI approaches",
    },
    {
      name: "Methodological Evaluation",
      description: "Assessing appropriateness of AI-suggested methods",
    },
  ];

  const conceptualEvaluationSkills: Skill[] = [
    {
      name: "Ethical Oversight",
      description: "Ensuring research adheres to ethical principles",
    },
    {
      name: "Contextual Integration",
      description: "Placing findings within broader knowledge contexts",
    },
    {
      name: "Epistemic Judgment",
      description: "Evaluating knowledge claims and their significance",
    },
  ];

  return (
    <div className="slide-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-2"
      >
        Essential Skills for AI-Augmented Researchers
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-blue-200 mb-6"
      >
        New competencies required for doctoral success in an AI-rich environment
      </motion.h2>

      <div className="grid grid-cols-3 gap-6 h-[calc(100%-10rem)]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="col-span-2 h-full"
        >
          <div className="w-full h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              <SkillQuadrant
                title="Technical Creation Skills"
                skills={technicalCreationSkills}
                delay={0.2}
              />
              <SkillQuadrant
                title="Conceptual Creation Skills"
                skills={conceptualCreationSkills}
                delay={0.4}
              />
              <SkillQuadrant
                title="Technical Evaluation Skills"
                skills={technicalEvaluationSkills}
                delay={0.6}
              />
              <SkillQuadrant
                title="Conceptual Evaluation Skills"
                skills={conceptualEvaluationSkills}
                delay={0.8}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="col-span-1 h-full"
        >
          <DeepSeekOutput />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide29;
