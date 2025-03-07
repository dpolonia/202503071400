import { JSX } from "react";
import { usePresentation } from "../context/PresentationContext";
import type { Swiper as SwiperType } from "swiper";

interface SlideInfo {
  component: React.ComponentType;
  title: string;
}

interface SlideNavigationProps {
  swiperInstance: SwiperType | null;
  slides: SlideInfo[];
}

const SlideNavigation = ({
  swiperInstance,
  slides,
}: SlideNavigationProps): JSX.Element => {
  const {
    activeSlide,
    presentationMode,
    setPresentationMode,
    timerActive,
    setTimerActive,
    elapsedTime,
    formatTime,
  } = usePresentation();

  return (
    <div className="fixed bottom-4 z-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
      <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-4">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="text-white hover:text-blue-300 px-2 py-1 rounded"
          disabled={activeSlide === 0}
        >
          ←
        </button>

        <span className="text-white text-sm">
          {activeSlide + 1} / {slides.length}
        </span>

        <button
          onClick={() => swiperInstance?.slideNext()}
          className="text-white hover:text-blue-300 px-2 py-1 rounded"
          disabled={activeSlide === slides.length - 1}
        >
          →
        </button>

        <div className="h-4 border-l border-gray-500 mx-2"></div>

        <button
          onClick={() => setTimerActive(!timerActive)}
          className="text-white hover:text-blue-300 text-sm"
        >
          {timerActive ? "⏸" : "▶️"} {formatTime(elapsedTime)}
        </button>

        <div className="h-4 border-l border-gray-500 mx-2"></div>

        <button
          onClick={() =>
            setPresentationMode(
              presentationMode === "normal" ? "presenter" : "normal"
            )
          }
          className="text-white hover:text-blue-300 text-sm px-2 py-1 rounded"
        >
          {presentationMode === "normal" ? "Presenter Mode" : "Normal Mode"}
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;
