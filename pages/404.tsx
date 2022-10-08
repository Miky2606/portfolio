import Head from "next/head";
import Link from "next/link";
import { FaGasPump, FaSadCry } from "react-icons/fa";
import Section from "./Layouts/section";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Page Not Found" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Section background="white">
        <div className="text-center">
          <h1 style={{ fontSize: "70px" }}>Error 404</h1>
          <FaSadCry style={{ fontSize: "70px" }} className="m-3" />
          <p>
            This pages doesn't exist go to{" "}
            <Link href="/">
              <a style={{ color: "red" }}>Home</a>
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
