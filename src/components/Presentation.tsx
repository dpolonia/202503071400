import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { usePresentation } from "../context/PresentationContext";
import SlideNavigation from "./SlideNavigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import slide components
import Slide01 from "./slides/Slide01";
import Slide29 from "./slides/Slide29";
import Slide44 from "./slides/Slide44";

// Slide interface
interface SlideInfo {
  component: React.ComponentType;
  title: string;
}

// For demonstration, we'll include 3 sample slides
const slides: SlideInfo[] = [
  { component: Slide01, title: "Introduction" },
  {
    component: Slide29,
    title: "Essential Skills for AI-Augmented Researchers",
  },
  { component: Slide44, title: "Closing" },
];

const Presentation = (): JSX.Element => {
  const { activeSlide, setActiveSlide, presentationMode } = usePresentation();
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    // Sync active slide with swiper
    if (swiperInstance && swiperInstance.activeIndex !== activeSlide) {
      swiperInstance.slideTo(activeSlide);
    }
  }, [activeSlide, swiperInstance]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowRight") {
        if (activeSlide < slides.length - 1) setActiveSlide(activeSlide + 1);
      } else if (e.key === "ArrowLeft") {
        if (activeSlide > 0) setActiveSlide(activeSlide - 1);
      } else if (e.key === "Home") {
        setActiveSlide(0);
      } else if (e.key === "End") {
        setActiveSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide, setActiveSlide]);

  return (
    <div className="presentation-wrapper h-screen w-screen bg-gradient-to-b from-gray-900 to-blue-900 overflow-hidden">
      <Swiper
        modules={[Navigation, Keyboard, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <SwiperSlide key={index}>
              <SlideComponent />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <SlideNavigation swiperInstance={swiperInstance} slides={slides} />

      {presentationMode === "presenter" && (
        <div className="fixed top-4 left-4 z-10 bg-black/70 px-4 py-2 rounded text-white text-sm">
          Presenter Mode: {activeSlide + 1} / {slides.length}
        </div>
      )}
    </div>
  );
};

export default Presentation;
