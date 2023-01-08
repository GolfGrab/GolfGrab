import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import CompactCard from "../../elements/CompactCard";
import SectionHeader from "../../elements/SectionHeader";
import { BrandIconFramer } from "../svg/brandIcon";

const Skills = () => {
  const { theme } = useTheme();
  const propsSvg = {
    initial: { transform: "scale(0)" },
    whileInView: {
      transform: "scale(1)",
      transition: {
        duration: 1,
        delay: 0.2,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const propsPath = {};
  const svgClassNames = "h-6 w-6 lg:h-10 lg:w-10";
  const brandIconFramer = BrandIconFramer(propsSvg, propsPath, svgClassNames);
  return (
    <>
      <div className="container  hero relative mx-auto  min-h-screen bg-base-200 py-16 ">
        <div className="hero-content w-full flex-col justify-between gap-10 pb-6  pt-24 lg:flex-row">
          {/* section text */}
          <SectionHeader
            sectionName="SKILLS"
            description="my technical level"
          />
          <motion.div className="flex w-full max-w-[30rem] flex-1 flex-col gap-2">
            <h2 className=" pt-5 text-center text-2xl">FRONT END</h2>
            <div className="flex flex-row  flex-wrap justify-center gap-2">
              <CompactCard
                icon={brandIconFramer[0]?.iconSVG}
                title={brandIconFramer[0]?.iconName}
                description="Intermediate"
                fixWidth={true}
              />
              <CompactCard
                icon={brandIconFramer[3]?.iconSVG}
                title={brandIconFramer[3]?.iconName}
                description="Familiarity"
                fixWidth={true}
              />

              <CompactCard
                icon={brandIconFramer[1]?.iconSVG}
                title={brandIconFramer[1]?.iconName}
                description="Intermediate"
                fixWidth={true}
              />
              <CompactCard
                icon={brandIconFramer[2]?.iconSVG}
                title={brandIconFramer[2]?.iconName}
                description="Beginner"
                fixWidth={true}
              />
              <CompactCard
                icon={brandIconFramer[4]?.iconSVG}
                title={brandIconFramer[4]?.iconName}
                description="Familiarity"
                fixWidth={true}
              />
            </div>
          </motion.div>
          {/* programing language end */}
          <motion.div className="flex w-full max-w-[30rem] flex-1 flex-col gap-2">
            <h2 className=" pt-5 text-center text-2xl">PROGRAMING LANGUAGE</h2>
            <div className="flex flex-row  flex-wrap justify-center gap-2">
              <CompactCard
                icon={brandIconFramer[5]?.iconSVG}
                title={brandIconFramer[5]?.iconName}
                description="Intermediate"
                fixWidth={true}
              />
              <CompactCard
                icon={brandIconFramer[6]?.iconSVG}
                title={brandIconFramer[6]?.iconName}
                description="Intermediate"
                fixWidth={true}
              />
              <CompactCard
                icon={brandIconFramer[7]?.iconSVG}
                title={brandIconFramer[7]?.iconName}
                description="Intermediate"
                fixWidth={true}
              />
              <CompactCard
                icon={brandIconFramer[8]?.iconSVG}
                title={brandIconFramer[8]?.iconName}
                description="Beginner"
                fixWidth={true}
              />
            </div>
          </motion.div>
          {/* back end */}
          <motion.div className="flex w-full max-w-[30rem] flex-1 flex-col gap-2">
            <h2 className=" pt-5 text-center text-2xl">
              BACK END <br />
            </h2>
            <h3 className=" text-center ">[ low interested at this time ]</h3>
            <div className="flex flex-row  flex-wrap justify-center gap-2">
              <CompactCard
                icon={brandIconFramer[12]?.iconSVG}
                title={brandIconFramer[12]?.iconName}
                description="Intermediate"
                fixWidth={true}
              />
              <CompactCard
                icon={brandIconFramer[11]?.iconSVG}
                title={brandIconFramer[11]?.iconName}
                description="Beginner"
                fixWidth={true}
              />

              <CompactCard
                icon={brandIconFramer[10]?.iconSVG}
                title={brandIconFramer[10]?.iconName}
                description="Intermediate"
                fixWidth={true}
              />
              <CompactCard
                icon={
                  <motion.img
                    {...propsSvg}
                    src="https://raw.githubusercontent.com/gin-gonic/logo/master/wb.svg"
                    className={`${
                      theme === "black" ? "invert" : ""
                    } h-6  lg:h-10  `}
                  />
                }
                title="Gin-Gonic"
                description="Beginner"
                fixWidth={true}
              />
              <CompactCard
                icon={brandIconFramer[9]?.iconSVG}
                title={brandIconFramer[9]?.iconName}
                description="Intermediate"
                fixWidth={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
