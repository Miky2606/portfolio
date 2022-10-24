import { NextPage } from "next";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Projects, projects } from "../interfaces/interface";
import Section from "../Layouts/section";
import Cards from "./subComponents/card";
import TitleTyping from "./subComponents/title";
import { useEffect, useState } from "react";

const Projects: NextPage = () => {
  return (
    <>
      <Section background="url(/imgs/back2.svg)">
        <Container className="text-center m-5   ">
          <TitleTyping fontSize="60px" text="Projects" />
          <Row>
            <ProjectsMobile />

            {projects.map((value: Projects, index: number) => {
              return (
                <Col
                  sm="12"
                  md="6"
                  lg="4"
                  className="py-3 text-center other-device"
                  key={index}
                >
                  <Cards {...value} />
                </Col>
              );
            })}
          </Row>
          {projects.length > 4 ? (
            <div>
              <ButtonProjects />{" "}
            </div>
          ) : (
            <></>
          )}
        </Container>
      </Section>
    </>
  );
};

const ProjectsMobile = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);

  const change = (select: string) => {
    if (select === "prev" && index > 0) {
      if (index <= 0) {
        return setIndex(projects.length);
      }
      return setIndex(index - 1);
    }

    if (index + 1 >= projects.length) {
      return setIndex(0);
    }

    return setIndex(index + 1);
  };

  return (
    <div className="mobile">
      <Col
        sm="12"
        md="6"
        lg="4"
        className="py-3 text-center  "
        key={projects[index].name}
      >
        <Cards {...projects[index]} />

        <Row style={{ padding: "12px" }}>
          <Col xs="4">
            <FaArrowLeft
              className="arrow-left"
              onClick={() => change("prev")}
            />
          </Col>

          <Col xs="4">
            <div className="capsule">
              {projects.map((e: Projects, indexMap: number) => {
                return (
                  <div
                    className={index === indexMap ? "circle active" : "circle"}
                  ></div>
                );
              })}
            </div>
          </Col>

          <Col xs="4">
            <FaArrowRight
              className="arrow-right"
              onClick={() => change("next")}
            />
          </Col>
        </Row>
      </Col>
    </div>
  );
};

const ButtonProjects = (): JSX.Element => {
  return (
    <Link href="https://github.com/Miky2606">
      <a target="_blank">
        <Button style={{ width: "40%" }} className="btn btn-info text-dark m-2">
          View More
        </Button>
      </a>
    </Link>
  );
};
export default Projects;
