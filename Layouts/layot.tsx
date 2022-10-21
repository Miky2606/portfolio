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
        <title>Jonathan Garcia</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
