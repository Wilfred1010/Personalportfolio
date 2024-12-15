// wilfred monye 
// 301353973

import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <p>Wilfred Monye centennial college. All Rights Reserved</p>
            <p>Email: <a href="mailto:moneywilfred@gmail.com">monyewilfred@gmail.com</a></p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}
