import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./footer";
import NavbarCustom from "./navbar";

export type LayoutProps = {
  children: React.ReactNode;
  background?: string;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
