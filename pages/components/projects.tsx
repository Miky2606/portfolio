import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Projects, projects } from "../interfaces/interface";
import Section from "../Layouts/section";
import { Cards } from "./subComponents/card";
import { TitleTyping } from "./subComponents/title";

interface Size {
  width: number;
  height: number;
}

const Projects: NextPage = () => {
  var random = Math.floor(Math.random() * projects.length);
  const [size, setSize] = useState<Size>();
  const resizeHanlder = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHanlder);

    return () => {
      window.removeEventListener("resize", resizeHanlder);
    };
  }, []);
  return (
    <>
      <Section background="url(/imgs/back2.svg)">
        <Container className="text-center m-5   ">
          <TitleTyping fontSize="60px" text="Projects" />
          <Row>
            {!size ||
            Math.min(size.width, size.height) <= 500 ||
            projects.length > 1 ? (
              <Col
                sm="12"
                md="6"
                lg="4"
                className="py-3 text-center "
                key={projects[random].name}
              >
                <Cards {...projects[random]} />
              </Col>
            ) : (
              projects.map((value: Projects, index: number) => {
                return (
                  <Col
                    sm="12"
                    md="6"
                    lg="4"
                    className="py-3 text-center "
                    key={index}
                  >
                    <Cards {...value} />
                  </Col>
                );
              })
            )}
          </Row>

          {projects.length > 4 ||
          !size ||
          Math.min(size?.width, size.height) <= 500 ? (
            <Link href="https://github.com/Miky2606">
              <a target="_blank">
                <Button
                  style={{ width: "40%" }}
                  className="btn btn-info text-dark m-2"
                >
                  View More
                </Button>
              </a>
            </Link>
          ) : (
            <></>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Projects;
