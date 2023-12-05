import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import { SectionProvider } from "../contexts/SectionContext";

import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="black">
      <SectionProvider>
        <Component {...pageProps} />
        <style jsx global>
          {`
            :root {
              --montserrat-font: ${montserrat.style.fontFamily};
            }
          `}
        </style>
      </SectionProvider>
    </ThemeProvider>
  );
};

export default MyApp;
