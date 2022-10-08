import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Section from "../Layouts/section";
import { FaArrowDown, FaGithub, FaInstagram } from "react-icons/fa";
import { images } from "../interfaces/interface";

import TitleTyping from "./subComponents/title";
import Icons from "./subComponents/icons";
const About: NextPage = () => {
  return (
    <>
      <Section background="url(/imgs/back1.svg)">
        <Container className="text-dark  text-center ">
          <TitleTyping fontSize="38px" text="I'm Jonathan Garcia" />
          <Row>
            <Col sm={6} className="mt-2">
              <Image
                className="rounded"
                width={"70%"}
                height={"80%"}
                src={images}
                alt=""
              />
            </Col>
            <Col
              sm={6}
              className="mt-3 align-self-center"
              style={{ fontSize: "1.6em" }}
            >
              a full-stack developer. Passionate about creating new things and
              full of ideas and eager to learn more about this exciting world of
              programming
              <Icons />
            </Col>
          </Row>

          <FaArrowDown className="mt-3 arrow-down" />
        </Container>
      </Section>
    </>
  );
};

export default About;
