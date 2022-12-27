import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero_dev_svg from "../sections/svg/Hero_dev.svg";
// import Hero_dev_with_tech from "../sections/svg/Hero_dev_with_tech.svg";
import { BrandIconFramer, branIcons } from "./svg/brandIcon";

const Hero = () => {
  const [headingText, setHeadingText] = useState("Full Stack");

  const headingTexts = [
    "Full Stack",
    ...branIcons.map(({ iconName }) => iconName),
  ];

  const [showScrollDown, setShowScrollDown] = useState(true);
  const scrollHandler = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShowScrollDown(false);
    } else {
      setShowScrollDown(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const propsSvg = {
    initial: { opacity: 0.6, scale: 0.8, rotate: -15 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,

      transition: {
        duration: 2,
        type: "spring",
        stiffness: 500,
      },
    },

    whileHover: { scale: 1.2 },

    whileTap: { scale: 0.9 },
  };

  const propsPath = {};
  const svgClassNames = "h-12 w-12 2xl:h-14 2xl:w-14 px-1";
  return (
    <div className="container  hero relative mx-auto  min-h-screen bg-base-200 py-16 ">
      <div className="hero-content w-full flex-col justify-between p-6  lg:flex-row-reverse ">
        {/* svg side */}
        <motion.div className="opacity-90">
          <Hero_dev_svg />
          {/* <Hero_dev_with_tech /> */}
          <div className="hidden justify-between lg:flex">
            {BrandIconFramer(propsSvg, propsPath, svgClassNames).map(
              ({ iconName, iconSVG }) => (
                <motion.div
                  key={iconName}
                  onHoverStart={() => setHeadingText(iconName)}
                >
                  {iconSVG}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
        {/* text side */}
        <motion.div
          layout
          transition={{ duration: 1 }}
          className="relative flex flex-1  flex-col justify-center"
        >
          <motion.h1
            layout
            transition={{ duration: 1 }}
            className=" opacity-85 mb-4  font-sans text-2xl font-semibold text-secondary lg:text-4xl 2xl:text-4xl"
          >
            Hi, I{`'`}m Golf <br />
            Surapus Moonjaras
          </motion.h1>
          <AnimatePresence>
            (
            {headingTexts.map(
              (iconName) =>
                iconName === headingText && (
                  <motion.h2
                    key={iconName}
                    className=" font-sans text-6xl font-semibold text-primary  lg:text-7xl 2xl:text-8xl"
                    initial={{
                      opacity: 0,
                      x: -100,
                      y: -50,
                      position: "absolute",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      position: "absolute",

                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: 100,
                      position: "absolute",
                      transition: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                  >
                    {headingText}
                  </motion.h2>
                )
            )}
            )
          </AnimatePresence>

          <motion.h2
            layout
            transition={{ duration: 1 }}
            className=" font-sans text-5xl font-semibold text-primary lg:text-6xl 2xl:text-7xl"
          >
            <br />
            <br /> Developer
          </motion.h2>
          <motion.p
            layout
            transition={{ duration: 1 }}
            className="mt-4 text-base  text-secondary opacity-80 sm:text-lg sm:font-semibold lg:text-xl"
          >
            who will make your dream project
            <br className="sm:hidden" /> come true
          </motion.p>
          <div className=" bottom-0 mt-8 inline-flex justify-between lg:w-fit lg:justify-start lg:space-x-4">
            <a
              href="#Contact"
              className="btn-primary btn gap-2 font-semibold transition-transform duration-300 ease-in-out hover:scale-110"
            >
              contact me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hidden h-6 w-6 lg:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </a>
            <a
              href="#About"
              className="btn-outline btn-primary btn gap-2 font-semibold transition-transform duration-300 ease-in-out hover:scale-110"
            >
              learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hidden h-6 w-6 lg:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showScrollDown && (
          <motion.a
            key={111}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 5, duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="absolute bottom-16 left-4 text-center text-xs lg:left-auto"
            href="#About"
          >
            MORE
          </motion.a>
        )}
        {showScrollDown && (
          <motion.a
            key={222}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 5, duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="absolute bottom-4 left-4   lg:left-auto "
            href="#About"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 animate-bounce duration-1000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
