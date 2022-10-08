import type { NextPage } from "next";
import About from "../components/about";
import Projects from "../components/projects";
import Skills from "../components/skills";

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
