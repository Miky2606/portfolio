import type { NextPage } from "next";
import { Head } from "next/document";
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
