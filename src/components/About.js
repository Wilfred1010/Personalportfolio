import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/profile-img.jpg";
import resumePDF from "../assets/pdf/Resume.docx"; 

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={profileImg}
              alt="Wilfred Monye "
              className="profile-img"
              style={{ borderRadius: "10px", width: "100%" }}
            />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              Hello My name is <strong>Wilfred Monye </strong>, and I am a passionate web developer with expertise
              in building dynamic and user-friendly websites. With experience in
              React, Node.js, and MongoDB, I love turning creative ideas into
              functional applications. I am detail-oriented, innovative, and always
              eager to take on challenging projects that allow me to grow
              professionally.
            </p>
            <a href={resumePDF} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary">
              Download My Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
