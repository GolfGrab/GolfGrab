import { useContext } from "react";
import { SectionContext } from "../../contexts/SectionContext";
import type { SectionType } from "../Home/sections";
import ThemeSwitch from "./ThemeSwitch.component";

const Navbar = () => {
  const { section } = useContext(SectionContext);
  const allSections: SectionType[] = [
    "Hero",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-16 w-full border-b-2 border-base-content  bg-base-100">
        <div className="container navbar  mx-auto  ">
          <div className="flex-1">
            <a
              href="#Hero"
              className="btn-ghost btn  text-2xl font-bold normal-case md:text-3xl"
            >
              Golf Grab
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal  hidden space-x-4 px-1 xl:inline-flex">
              {allSections.map((sectionName) => (
                <li key={sectionName}>
                  <a
                    href={`#${sectionName}`}
                    className={` ${
                      section === sectionName
                        ? "btn-accent uppercase text-base-100"
                        : "uppercase"
                    }`}
                  >
                    {sectionName === "Hero" ? "HOME" : sectionName}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn-accent btn mx-4 hidden text-base font-semibold text-base-100 md:inline-flex"
              href="/Surapus_Resume_06_Dec_2023.pdf"
              target="_blank"
              rel="noreferrer"
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
            <a
              className="btn-ghost btn-square btn mr-4 border-2 border-black bg-white md:mr-0"
              href="https://github.com/GolfGrab"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <div className="divider divider-horizontal hidden  md:flex" />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
