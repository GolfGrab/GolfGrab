import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import type { SectionType } from "../sections";

type SectionTrackerProps = {
  sectionName: SectionType;
  setSection: ((sectionName: SectionType) => void) | null;
  children: React.ReactNode;
};

const SectionTracker: React.FC<SectionTrackerProps> = ({
  sectionName,
  setSection,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50%" });

  useEffect(() => {
    if (isInView) {
      setSection?.(sectionName);
      history.pushState(null, "", `#${sectionName}`);
    }
  }, [isInView, sectionName, setSection]);

  return (
    <>
      <section ref={ref} id={sectionName} className="w-full ">
        {children}
      </section>
    </>
  );
};

export default SectionTracker;
