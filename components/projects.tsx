import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Projects, projects } from "../interfaces/interface";
import Section from "../Layouts/section";
import Cards from "./subComponents/card";
import TitleTyping from "./subComponents/title";

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
            <div className="other-device">
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
  var random = Math.floor(Math.random() * projects.length);
  return (
    <div className="mobile">
      <Col
        sm="12"
        md="6"
        lg="4"
        className="py-3 text-center  "
        key={projects[random].name}
      >
        <Cards {...projects[random]} />
      </Col>

      <ButtonProjects />
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
