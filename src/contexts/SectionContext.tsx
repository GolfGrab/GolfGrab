import { createContext, useState } from "react";
import type { SectionType } from "../components/Home/sections";

type SectionContextType = {
  section: SectionType;
  setSection: ((section: SectionType) => void) | null;
};

type SectionProviderProps = {
  children: React.ReactNode;
};

export const SectionContext = createContext<SectionContextType>({
  section: "Hero",
  setSection: null,
});

export const SectionProvider: React.FC<SectionProviderProps> = ({
  children,
}) => {
  const [section, setSection] = useState<SectionType>("Hero");

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};
