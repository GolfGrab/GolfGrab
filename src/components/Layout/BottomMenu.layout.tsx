import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type BottomMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BottomMenu: React.FC<BottomMenuProps> = ({ setIsOpen, isOpen }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const scrollHandler = () => {
    if (window.scrollY > (window.innerHeight * 2) / 3) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ y: 500, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 500, x: "-50%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="container fixed bottom-0 left-[50%] z-10 translate-x-[-50%] "
          >
            <div className="card w-full ">
              <div className="card-body flex-row justify-end p-4">
                {showTopBtn && (
                  <div className="card-actions justify-end">
                    <button
                      className="btn-ghost btn-square  btn "
                      onClick={() => goToTop()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-10 w-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                )}
                <div className="card-actions justify-end">
                  <button
                    className="btn-ghost btn-square  btn xl:hidden"
                    onClick={() => setIsOpen(true)}
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
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
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

export default BottomMenu;
