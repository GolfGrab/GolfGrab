import ThemeSwitch from "./ThemeSwitch.component";

const Navbar = () => {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-16 w-full border-b-2 border-base-content  bg-base-100">
        <div className="container navbar  mx-auto  ">
          <div className="flex-1">
            <a
              href="#home"
              className="btn-ghost btn  text-2xl font-bold normal-case md:text-3xl"
            >
              Golf Grab
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal  hidden space-x-4 px-1 lg:inline-flex">
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#projects">PROJECTS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
            <a className="btn-accent btn mx-4 hidden text-base font-semibold text-base-100 md:inline-flex">
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
            <div className="divider divider-horizontal hidden  md:flex"></div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
