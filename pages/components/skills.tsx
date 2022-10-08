import { Col, Container, Row } from "react-bootstrap";
import { skill } from "../interfaces/interface";
import Section from "../Layouts/section";
import { TitleTyping } from "./subComponents/title";

const Skills = (): JSX.Element => {
  return (
    <>
      <Section background="url(/imgs/back3.svg)">
        <Container className="text-center">
          <TitleTyping fontSize="60px" text="Skills" />
          <Row>
            <Col sm="6" md="12" lg="12" className="skills-glass">
              {skill.map((res) => (
                <img
                  key={res}
                  className="m-3"
                  style={{ width: "5em" }}
                  src={`/icons/${res}.svg`}
                  alt={res}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Skills;
