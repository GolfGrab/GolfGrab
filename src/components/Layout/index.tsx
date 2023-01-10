import { useState } from "react";
import BottomMenu from "./BottomMenu.layout";
import Navbar from "./Navbar.layout";
import NavCard from "./NavCard.layout";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <NavCard isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
      <BottomMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default Layout;
