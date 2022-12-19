import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import type { SectionType } from "../sections";

type SectionTrackerProps = {
  section: SectionType;
  setSection: ((section: SectionType) => void) | null;
  children: React.ReactNode;
};

const SectionTracker: React.FC<SectionTrackerProps> = ({
  section,
  setSection,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50%" });

  useEffect(() => {
    if (isInView) {
      setSection?.(section);
    }
  }, [isInView, section, setSection]);

  return (
    <>
      <section ref={ref} id={section}>
        {children}
      </section>
    </>
  );
};

export default SectionTracker;
