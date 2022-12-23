import Hero_dev_svg from "../utils/Hero_dev.svg";

const Hero = () => {
  return (
    <div className="container  hero relative mx-auto  min-h-screen bg-base-200 pt-16">
      <div className="hero-content w-full flex-col justify-between p-6  lg:flex-row-reverse ">
        {/* svg side */}
        <div className="flex flex-1 justify-center ">
          <Hero_dev_svg />
        </div>
        {/* text side */}
        <div className="flex flex-1 flex-col  justify-center">
          <h1 className=" mb-4 font-sans  text-2xl font-semibold text-secondary lg:text-4xl 2xl:text-4xl">
            Hi, I{`'`}m Golf <br />
            Surapus Moonjaras
          </h1>
          <h2 className=" font-sans text-6xl font-semibold text-primary lg:text-7xl 2xl:text-8xl">
            Full Stack
          </h2>
          <h2 className=" font-sans text-6xl font-semibold text-primary lg:text-7xl 2xl:text-8xl">
            Developer
          </h2>
          <div className="mt-16 inline-flex justify-between lg:justify-start lg:space-x-4">
            <a href="#Contact" className="btn-primary btn ">
              contact Me
            </a>
            <a href="#About" className="btn-outline btn-primary btn ">
              learn More
            </a>
          </div>
        </div>
      </div>
      <a
        className="absolute bottom-16 left-4 text-center text-xs lg:left-auto"
        href="#About"
      >
        Scroll to see more
      </a>
      <a className="absolute bottom-4 left-4   lg:left-auto " href="#About">
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
      </a>
    </div>
  );
};

export default Hero;
