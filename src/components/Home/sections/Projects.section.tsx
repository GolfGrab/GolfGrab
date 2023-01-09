import { motion } from "framer-motion";
import CardProject from "../../elements/CardProject";
import SectionHeader from "../../elements/SectionHeader";

const Projects = () => {
  return (
    <>
      <div className="container   relative mx-auto  min-h-screen bg-base-200 py-16 ">
        <div className=" w-full flex-col   pb-6  pt-24 ">
          {/* section text */}
          <SectionHeader
            sectionName="PROJECTS"
            description="Samples of my coding skills"
          />

          <motion.div className="flex w-full  flex-1 flex-col gap-2 pt-10">
            <div className="flex flex-row  flex-wrap justify-center gap-10 p-3">
              <CardProject
                title="test1"
                description="test1 test1test1test1"
                imgSrc="/GolfGrab.jfif"
                hrefGithub=""
                hrefWebsite=""
              />
              <CardProject
                title="test1"
                description="test1 test1test1test1"
                imgSrc="/GolfGrab.jfif"
                hrefGithub=""
                hrefWebsite=""
              />
              <CardProject
                title="test1"
                description="test1 test1test1test1"
                imgSrc="/GolfGrab.jfif"
                hrefGithub=""
                hrefWebsite=""
              />
              <CardProject
                title="test1"
                description="test1 test1test1test1"
                imgSrc="/GolfGrab.jfif"
                hrefGithub=""
                hrefWebsite=""
              />
              <CardProject
                title="test1"
                description="test1 test1test1test1"
                imgSrc="/GolfGrab.jfif"
                hrefGithub=""
                hrefWebsite=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
