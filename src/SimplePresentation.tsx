import React, { useState, useEffect } from "react";

// Interface for slide information
interface SlideInfo {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

const SimplePresentation = (): React.ReactElement => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Define our slides
  const slides: SlideInfo[] = [
    {
      title: "AI, Research and the Future of Universities",
      subtitle:
        "The Post-University Era? Rethinking Knowledge Production as AI Approaches AGI",
      content: (
        <div className="mt-16 text-gray-300">
          <p className="text-xl">Your Name</p>
          <p>Title & Institutional Affiliation</p>
          <p className="mt-2">{new Date().toLocaleDateString()}</p>
        </div>
      ),
    },
    {
      title: "Essential Skills for AI-Augmented Researchers",
      subtitle:
        "New competencies required for doctoral success in an AI-rich environment",
      content: (
        <div className="grid grid-cols-2 gap-4 mt-8 text-left">
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/50">
            <h3 className="text-xl font-bold text-blue-300 mb-2">
              Technical Creation Skills
            </h3>
            <ul className="space-y-2">
              <li>• Prompt Engineering</li>
              <li>• Workflow Integration</li>
              <li>• Multimodal Research Design</li>
            </ul>
          </div>
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/50">
            <h3 className="text-xl font-bold text-blue-300 mb-2">
              Conceptual Creation Skills
            </h3>
            <ul className="space-y-2">
              <li>• Problem Identification</li>
              <li>• Cross-Domain Connection</li>
              <li>• Value-Based Prioritization</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Shaping the Future of Knowledge",
      subtitle:
        "Thank you for exploring these transformative possibilities together",
      content: (
        <div className="max-w-2xl bg-blue-900/30 p-8 rounded-lg border border-blue-500/50 mb-10">
          <p className="text-xl text-gray-200 leading-relaxed">
            "As we navigate this transformative era, doctoral students in
            business innovation have a unique opportunity to pioneer new
            approaches to research, reshape knowledge production processes, and
            redefine the university's role in society."
          </p>
        </div>
      ),
    },
  ];

  const currentSlide = slides[activeSlide];

  const goToPrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide]);

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      {/* Slide content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-5xl font-bold mb-4">{currentSlide.title}</h1>
        <h2 className="text-2xl text-blue-300 mb-8">{currentSlide.subtitle}</h2>

        {/* Dynamic slide content */}
        {currentSlide.content}
      </div>

      {/* Navigation controls */}
      <div className="p-4 flex justify-center space-x-4">
        <button
          onClick={goToPrevSlide}
          disabled={activeSlide === 0}
          className={`px-4 py-2 rounded ${
            activeSlide === 0
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          {activeSlide + 1} / {slides.length}
        </span>
        <button
          onClick={goToNextSlide}
          disabled={activeSlide === slides.length - 1}
          className={`px-4 py-2 rounded ${
            activeSlide === slides.length - 1
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SimplePresentation;
