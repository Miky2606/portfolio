import { FC } from "react";
import Footer from "./footer";

export type LayoutProps = {
  children: React.ReactNode;
  background?: string;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
