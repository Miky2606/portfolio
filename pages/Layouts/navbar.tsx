import { NextPage } from "next"
import { Navbar, Container } from "react-bootstrap"

const NavbarCustom:NextPage = ()=>{
    return<>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
}

export default NavbarCustom