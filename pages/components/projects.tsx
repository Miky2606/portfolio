import { NextPage } from "next";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Projects, projects } from "../interfaces/interface";
import Section from "../Layouts/section";
import { Cards } from "./subComponents/card";

const Projects: NextPage = () => {
  return (
    <>
      <Section background="red">
        <Container className="text-center m-5 ">
          <h1 style={{ fontSize: "60px" }} className="mt-3">
            Projects
          </h1>
          <Row>
            {projects.map((value: Projects) => {
              return (
                <>
                  <Col sm="12" md="6" lg="4" className="py-3 text-center ">
                    <Cards {...value} />
                  </Col>
                </>
              );
            })}
          </Row>
          <Button
            style={{ width: "40%" }}
            className="btn btn-info text-dark m-2"
          >
            View More
          </Button>
        </Container>
      </Section>
    </>
  );
};

export default Projects;
