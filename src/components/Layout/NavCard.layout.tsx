import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { SectionContext } from "../../contexts/SectionContext";

type NavCardProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavCard: React.FC<NavCardProps> = ({ isOpen, setIsOpen }) => {
  const { section } = useContext(SectionContext);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 500, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 500, x: "-50%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="container fixed bottom-0 left-[50%] z-50 translate-x-[-50%] xl:hidden"
          >
            <div
              className="fixed bottom-0 left-[-50vw]   h-[200vh] w-[200vw]  bg-black opacity-30"
              onClick={() => setIsOpen(false)}
            />

            <div className="card w-full rounded-b-none  bg-base-100">
              <div className="card-body p-4">
                <ul className="menu menu-horizontal  w-full justify-evenly  bg-base-100 p-2">
                  <li>
                    <a
                      href="#Hero"
                      className={`w-[25vw] flex-col ${
                        section === "Hero" ? "bg-accent text-base-100 " : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      href="#About"
                      className={`w-[25vw] flex-col ${
                        section === "About" ? "bg-accent text-base-100 " : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Skills"
                      className={`w-[25vw] flex-col ${
                        section === "Skills" ? "bg-accent text-base-100 " : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        />
                      </svg>
                      SKILLS
                    </a>
                  </li>
                </ul>
                <ul className="menu menu-horizontal  w-full justify-evenly    bg-base-100 p-2">
                  <li>
                    <a
                      href="#Projects"
                      className={`w-[25vw] flex-col ${
                        section === "Projects" ? "bg-accent text-base-100 " : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        />
                      </svg>
                      PROJECTS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact"
                      className={`w-[25vw] flex-col ${
                        section === "Contact" ? "bg-accent text-base-100 " : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                      CONTACT
                    </a>
                  </li>
                  <li>
                    <a
                      className="w-[25vw] flex-col"
                      href="#"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className=" h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      RESUME
                    </a>
                  </li>
                </ul>
                <div className="card-actions justify-end">
                  <button
                    className="btn-ghost btn-square  btn"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavCard;
