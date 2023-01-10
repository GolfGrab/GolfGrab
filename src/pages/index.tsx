import { type NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import type { SectionType } from "../components/Home/sections";
import {
  About,
  Contact,
  Hero,
  Projects,
  Skills,
} from "../components/Home/sections";
import SectionTracker from "../components/Home/utils/SectionTracker";
import Layout from "../components/Layout";
import { SectionContext } from "../contexts/SectionContext";

const sectionElements: {
  sectionName: SectionType;
  component: React.ReactNode;
}[] = [
  { sectionName: "Hero", component: <Hero /> },
  { sectionName: "About", component: <About /> },
  { sectionName: "Skills", component: <Skills /> },
  { sectionName: "Projects", component: <Projects /> },
  { sectionName: "Contact", component: <Contact /> },
];

const Home: NextPage = () => {
  const { setSection } = useContext(SectionContext);

  return (
    <>
      <Layout>
        <Head>
          <title>Golf Grab</title>
          <meta name="description" content="GolfGrab personal portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="title" content="Golf Grab" />
          <meta name="description" content="GolfGrab personal portfolio" />
          <meta name="keywords" content="GolfGrab, portfolio" />
          <meta name="og:title" content="Golf Grab" />
          <meta name="og:description" content="GolfGrab personal portfolio" />
          <meta name="og:image" content="/GolfGrab.jfif" />
          <meta name="og:url" content="https://golf-grab.vercel.app/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/GolfGrab.jfif" />
          <meta name="twitter:site" content="@draculacode" />
          <meta
            name="twitter:description"
            content="GolfGrab personal portfolio"
          />
          <meta name="twitter:title" content="Golf Grab" />

          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
          />
        </Head>

        <main className="flex min-h-screen w-full flex-col  justify-center bg-base-200">
          {sectionElements.map((sectionElement) => (
            <SectionTracker
              key={sectionElement.sectionName}
              sectionName={sectionElement.sectionName}
              setSection={setSection}
            >
              {sectionElement.component}
            </SectionTracker>
          ))}
        </main>
      </Layout>
    </>
  );
};

export default Home;
