import Head from "next/head";
import { FC } from "react";
import Footer from "./footer";

export type LayoutProps = {
  children: React.ReactNode;
  background?: string;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          Jonathan Garcia a full-stack developer. Passionate about creating new
          things and full of ideas and eager to learn more about this exciting
          world of programming
        </title>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
