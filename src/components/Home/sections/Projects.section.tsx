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
                // BARCAMP BANGKHEN EVENT | Repo | Website       	Bangkok, Thailand
                // Front-End Team Leader   	October 2023 – Present
                // Contributed to the development of a responsive and engaging promotional website for the Barcamp Bangkhen event, enhancing online visibility, and cross-device accessibility.
                // Technologies Used: ReactJS, NextJS, HTML, CSS, and Tailwind

                <CardProject
                  title="Barcamp Bangkhen Event promotional website"
                  description="engaging promotional website for the Barcamp Bangkhen event, enhancing online visibility, and cross-device accessibility."
                  utilize="ReactJS NextJS TailwindCSS"
                  imgSrc="/barcamp.png"
                  hrefGithub="https://github.com/barcamp-bangkhen-11/bcbk11-frontend"
                  hrefWebsite="https://www.barcampbangkhen.com/"
                  key="barcamp bangkhen"
                />,
                //                 MeeOrder - Point of Sale (POS) Web App | Repo      	Bangkok, Thailand
                // Front-End Team Leader       	June 2023 – November 2023
                // Led a 13-member team in successfully delivering a restaurant management and customer ordering web application.
                // Ensured the maintainability of a highly committed codebase with consistent coding practices, peek 98 commits per week.
                // Actively incorporated weekly user feedback, contributing over 173 Git commits, ensuring continuous improvement and alignment with evolving user needs.
                // Technologies Used: ReactJS, NextJS, HTML, CSS, Styled-Components, Ant Design, Zustand, and REST API.
                <CardProject
                  title="MeeOrder - Point of Sale (POS) Web App"
                  description="Led a 13-member team in successfully delivering a restaurant management and customer ordering web application."
                  utilize="ReactJS NextJS AntDesign Styled-Components Zustand RestAPI"
                  imgSrc="/meeorder-combo-v2.png"
                  hrefGithub="https://github.com/meeorder/meeorder-frontend"
                  hrefWebsite="https://meeorder-frontend.vercel.app/?session-id=65566cc1a9162a10d8bc28e3"
                  key="meeorder"
                />,

                // Potential Coalition feature
                // Developed the feature using React, TypeScript, and dndKit. Tailored the solution to enable intuitive government and
                // opposition team predictions through drag-and-drop of 67 political party cards, including sharing predictions.

                <CardProject
                  title="[internship] Thailand election result website ThaiPBS x INOX"
                  description="Developed the feature using React, TypeScript, and dndKit. Tailored the solution to enable intuitive government and opposition team predictions through drag-and-drop of 67 political party cards, including sharing predictions."
                  utilize="ReactJS TypeScript Styled-Components dndKit"
                  imgSrc="/inox-1.png"
                  hrefWebsite="https://election66.thaipbs.or.th/result/en/formation/formula?id=18"
                  key="coalition"
                />,
                // ● Swipe Policies
                // Designed and implemented a swipe mechanic and interactive UI using React and Framer Motion. Applied gamification
                // to enhance user engagement, achieving over 65,000 gaming interactions.
                <CardProject
                  title="[internship] Swipe Policies website ThaiPBS x INOX"
                  description="Designed and implemented a swipe mechanic and interactive UI using React and Framer Motion. Applied gamification to enhance user engagement, achieving over 65,000 gaming interactions."
                  utilize="ReactJS Framer-Motion"
                  imgSrc="/inox-2.png"
                  hrefWebsite="https://election66.thaipbs.or.th/result/en/formation/formula?id=18"
                  key="swipe"
                />,

                <CardProject
                  title="reservebook Hotel Booking website"
                  description="Simple Hotel Booking website feature search and filter room"
                  utilize="ReactJS NextJS TailwindCSS"
                  imgSrc="/reservebook.png"
                  hrefGithub="https://github.com/GolfGrab/reservebook"
                  hrefWebsite="https://reservebook.vercel.app/"
                  key="ReactJS NextJS TailwindCSS"
                />,

                <CardProject
                  title="Parcel Delivery status checker website [SPA]"
                  description="[version 1] Parcel Delivery status checker website"
                  utilize="ReactJS NextJS TailwindCSS graphqlAPI CMS(Hygraph)"
                  imgSrc="/parcelv1.png"
                  hrefGithub="https://github.com/GolfGrab/check-delivery"
                  hrefWebsite="https://draculacode-checkdelivery.vercel.app/"
                  key="Version 1 ReactJS NextJS TailwindCSS graphqlAPI CMS(Hygraph)"
                />,
                <CardProject
                  title="Parcel Delivery status checker website [SPA]"
                  description="[version 2] Parcel Delivery status checker website"
                  utilize="ReactJS NextJS TailwindCSS RestAPI Google Sheet API"
                  imgSrc="/parcelv2.png"
                  hrefGithub="https://github.com/GolfGrab/check-delivery-google-sheet"
                  hrefWebsite="https://check-delivery-google-sheet.vercel.app/"
                  key="Version 2 ReactJS NextJS TailwindCSS RestAPI Google Sheet API"
                />,
                <CardProject
                  title="Personal Tech blog website [SSR,SSG,ISR] [deprecated]"
                  description="Personal Tech blog website with CMS"
                  utilize="ReactJS NextJS TailwindCSS graphql CMS(Hygraph)"
                  imgSrc="/blog.png"
                  hrefGithub="https://github.com/GolfGrab/dracula-code"
                  hrefWebsite="https://draculacode.vercel.app/"
                  key="ReactJS NextJS TailwindCSS graphql CMS(Hygraph)"
                />,

                <CardProject
                  title="SimpleBank RestAPI JWT [not complete]"
                  description="SimpleBank RestAPI with JWT authentication"
                  utilize="Golang Gingonic PostgreSQL Docker"
                  imgSrc="/golang_backend.png"
                  hrefGithub="https://github.com/GolfGrab/journey-to-complete-backend"
                  hrefWebsite="https://www.youtube.com/playlist?list=PLy_6D98if3ULEtXtNSY_2qN21VCKgoQAE"
                  key="Golang Gingonic PostgreSQL Docker"
                />,
                <CardProject
                  title="Bookmark RestAPI"
                  description="Simple Bookmark RestAPI for learning new framework"
                  utilize="NestJS PostgreSQL Docker"
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
}) => {
  return (
    <motion.div
      initial={{ transform: "scale(0)" }}
      whileInView={{
        transform: "scale(1)",
        transition: {
          duration: 1,
          delay: 0.05,
          type: "spring",
          stiffness: 100,
        },
      }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default Projects;
