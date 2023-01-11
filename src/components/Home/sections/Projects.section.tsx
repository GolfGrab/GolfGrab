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
              {[
                <CardProject
                  title="Parcel Delivery status checker website [SPA]"
                  description="Version 1 ReactJS NextJS TailwindCSS graphqlAPI CMS(Hygraph)"
                  imgSrc="/parcelv1.png"
                  hrefGithub="https://github.com/GolfGrab/check-delivery"
                  hrefWebsite="https://draculacode-checkdelivery.vercel.app/"
                  key="Version 1 ReactJS NextJS TailwindCSS graphqlAPI CMS(Hygraph)"
                />,
                <CardProject
                  title="Parcel Delivery status checker website [SPA]"
                  description="Version 2 ReactJS NextJS TailwindCSS RestAPI Google Sheet API"
                  imgSrc="/parcelv2.png"
                  hrefGithub="https://github.com/GolfGrab/check-delivery-google-sheet"
                  hrefWebsite="https://check-delivery-google-sheet.vercel.app/"
                  key="Version 2 ReactJS NextJS TailwindCSS RestAPI Google Sheet API"
                />,
                <CardProject
                  title="Personal Tech blog website [SSR,SSG,ISR]"
                  description="ReactJS NextJS TailwindCSS graphql CMS(Hygraph)"
                  imgSrc="/blog.png"
                  hrefGithub="https://github.com/GolfGrab/dracula-code"
                  hrefWebsite="https://draculacode.vercel.app/"
                  key="ReactJS NextJS TailwindCSS graphql CMS(Hygraph)"
                />,
                <CardProject
                  title="E-Learning website [SSR,SSG,FULLSTACK]"
                  description="work in progress 🚧 ReactJS Nextjs TailwindCSS RestAPI Prisma MySQL"
                  imgSrc="/duck.png"
                  hrefGithub="https://github.com/Duck-Classroom/duck-classroom"
                  key="ReactJS Nextjs TailwindCSS RestAPI Prisma MySQL"
                />,
                <CardProject
                  title="SimpleBank RestAPI JWT"
                  description="Golang Gingonic PostgreSQL Docker"
                  imgSrc="/golang_backend.png"
                  hrefGithub="https://github.com/GolfGrab/journey-to-complete-backend"
                  hrefWebsite="https://www.youtube.com/playlist?list=PLy_6D98if3ULEtXtNSY_2qN21VCKgoQAE"
                  key="Golang Gingonic PostgreSQL Docker"
                />,
                <CardProject
                  title="Bookmark RestAPI"
                  description="NestJS PostgreSQL Docker"
                  imgSrc="/nest.png"
                  hrefGithub="https://github.com/GolfGrab/nestjs-api-learn"
                  hrefWebsite="https://www.youtube.com/watch?v=GHTA143_b-s"
                  key="NestJS PostgreSQL Docker"
                />,
              ].map((item, index) => (
                <PopupWhileInViewport key={index} idx={index}>
                  {item}
                </PopupWhileInViewport>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

type PopupWhileInViewportProps = {
  children: React.ReactNode;
  idx?: number;
};

const PopupWhileInViewport: React.FC<PopupWhileInViewportProps> = ({
  children,
  idx = 0,
}) => {
  return (
    <motion.div
      initial={{ transform: "scale(0)" }}
      whileInView={{
        transform: "scale(1)",
        transition: {
          duration: 1,
          delay: 0.2 + idx * 0.1,
          type: "spring",
          stiffness: 50,
        },
      }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default Projects;
