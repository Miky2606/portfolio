import { NextPage } from "next"
import { Container, Row, Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import Section from "../Layouts/section"
import {FaArrowDown} from "react-icons/fa"
const About:NextPage = ()=>{
    return<>
    <Section>
     <Container className="text-dark  text-center">
      <Row >
        <Col sm={6} className="mt-5" >
          <Image 
          
          width={'100%'}
           src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
          <img />
          </Col>
        <Col sm={6}  className="mt-5 align-self-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Deleniti laboriosam totam voluptatum, suscipit cum dolores
           facere natus delectus qui excepturi quos perferendis 
          et recusandae, sint provident! Ipsa nesciunt quibusdam optio!
        </Col>
      </Row>

      <FaArrowDown className="mt-5 arrow-down"/>
     
      </Container>
     
      </Section>
    </>
}

export default About