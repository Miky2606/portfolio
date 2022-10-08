import { FC } from "react";
import { LayoutProps } from "./layot";

const Section: FC<LayoutProps> = ({ children, background }) => {
  return (
    <>
      <section
        style={{
          background: background,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="section d-flex  justify-content-center align-items-center"
      >
        {children}
      </section>
    </>
  );
};

export default Section;
