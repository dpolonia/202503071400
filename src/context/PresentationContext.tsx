import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

// Simple version to test imports
interface PresentationContextType {
  activeSlide: number;
  setActiveSlide: (slide: number) => void;
}

const PresentationContext = createContext<PresentationContextType>({
  activeSlide: 0,
  setActiveSlide: () => {},
});

interface PresentationProviderProps {
  children: ReactNode;
}

export const PresentationProvider = ({
  children,
}: PresentationProviderProps): React.ReactElement => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <PresentationContext.Provider value={{ activeSlide, setActiveSlide }}>
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentation = (): PresentationContextType =>
  useContext(PresentationContext);
