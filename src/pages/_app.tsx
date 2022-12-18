import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import { SectionProvider } from "../contexts/SectionContext";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="black">
      <SectionProvider>
        <Component {...pageProps} />
      </SectionProvider>
    </ThemeProvider>
  );
};

export default MyApp;
