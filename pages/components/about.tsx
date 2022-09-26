import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Section from "../Layouts/section";
import { FaArrowDown, FaGithub, FaInstagram } from "react-icons/fa";
import { images } from "../interfaces/interface";
import Link from "next/link";
const About: NextPage = () => {
  return (
    <>
      <Section background="white">
        <Container className="text-dark  text-center">
          <Row>
            <Col sm={6} className="mt-5">
              <Image width={"100%"} src={images} alt="" />
              <img />
            </Col>
            <Col
              sm={6}
              className="mt-5 align-self-center"
              style={{ fontSize: "1.2em" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              laboriosam totam voluptatum, suscipit cum dolores facere natus
              delectus qui excepturi quos perferendis et recusandae, sint
              provident! Ipsa nesciunt quibusdam optio!
              <div className="icons py-2 ">
                <Link href="https://github.com/Miky2606">
                  <a target="_blank">
                    <FaGithub className="github m-2" />
                  </a>
                </Link>

                <Link href="">
                  <a target="_blank">
                    <FaInstagram className="instagram m-2" />
                  </a>
                </Link>
              </div>
            </Col>
          </Row>

          <FaArrowDown className="mt-5 arrow-down" />
        </Container>
      </Section>
    </>
  );
};

export default About;
