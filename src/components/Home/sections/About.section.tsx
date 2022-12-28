import { motion } from "framer-motion";
// import Image from "next/image";
import { TrackCursorImg } from "../utils/TrackCursorImg";

const About = () => {
  return (
    <>
      <div className="container  hero relative mx-auto  min-h-screen bg-base-200 py-16 ">
        <div className="hero-content w-full flex-col justify-between pb-6 pt-24  lg:flex-row">
          {/* section text */}
          <div className="absolute top-24 left-0 right-0 text-center ">
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 1 },
              }}
              className="text-3xl font-semibold text-primary xl:text-4xl"
            >
              ABOUT ME
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
              className="text-md    opacity-80 xl:text-lg"
            >
              learn more about me
            </motion.h2>
          </div>
          {/* photo side */}
          <motion.div className="flex-1">
            <TrackCursorImg url="/GolfGrab.jfif" angle={5} />
          </motion.div>
          {/* text side */}
          <motion.div className="flex flex-1 flex-col">
            <div className="flex flex-row gap-2">
              <div className="card card-compact flex-1 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                  <motion.svg
                    initial={{ transform: "scale(0)" }}
                    whileInView={{
                      transform: "scale(1)",
                      transition: {
                        duration: 1,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100,
                      },
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 lg:h-10 lg:w-10"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </motion.svg>
                </figure>
                <div className="card-body gap-0 ">
                  <h2 className="card-title mx-auto text-base lg:text-lg">
                    Active
                  </h2>
                  <p className=" mx-auto text-xs lg:text-sm">dev fast</p>
                </div>
              </div>
              <div className="card card-compact flex-1 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                  <motion.svg
                    initial={{ transform: "scale(0)" }}
                    whileInView={{
                      transform: "scale(1)",
                      transition: {
                        duration: 1,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100,
                      },
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 lg:h-10 lg:w-10"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </motion.svg>
                </figure>
                <div className="card-body gap-0">
                  <h2 className="card-title mx-auto text-base lg:text-lg">
                    Think
                  </h2>
                  <p className=" mx-auto text-xs lg:text-sm">smart</p>
                </div>
              </div>
              <div className="card card-compact flex-1 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                  <motion.svg
                    initial={{ transform: "scale(0)" }}
                    whileInView={{
                      transform: "scale(1)",
                      transition: {
                        duration: 1,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100,
                      },
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 lg:h-10 lg:w-10"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </motion.svg>
                </figure>
                <div className="card-body gap-0">
                  <h2 className="card-title mx-auto text-base lg:text-lg">
                    Learn
                  </h2>
                  <p className=" mx-auto text-xs lg:text-sm">24/7</p>
                </div>
              </div>
            </div>
            <p className="pt-6 text-lg">
              {`Hi, I'm GolfGrab! I'm a Thai college student with a strong interest in web development.`}
              <span className="hidden lg:inline">
                {`I'm always looking for new opportunities to learn and grow. In
                my free time, I enjoy watching some tech youtube to staying up
                to date with the latest technologies.`}
              </span>

              {`Thank you for visiting my page!`}
            </p>
            <a
              className="btn-accent btn ml-auto mr-0 hidden  text-base font-semibold text-base-100 lg:flex"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              RESUME
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
