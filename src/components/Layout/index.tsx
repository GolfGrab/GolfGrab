import { useEffect, useState } from "react";
import BottomMenu from "./BottomMenu.layout";
import Navbar from "./Navbar.layout";
import NavCard from "./NavCard.layout";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
