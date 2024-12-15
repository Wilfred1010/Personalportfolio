// wilfred monye 
// 301353973

import { Container, Row, Col } from "react-bootstrap";
import webdevimg from "../assets/img/webdevimg.png"; 
import ecomm from "../assets/img/ecomm.png";
import portfolioimg from "../assets/img/portfolioimg.png";

export const Projects = () => {
  const projects = [
    {
      title: "Travel Website",
      description: "Developed a responsive travel website enabling users to explore destinations. My role included designing the front-end UI and integrating APIs for location search.",
      imgUrl: webdevimg,
    },
    {
      title: "E-commerce Platform",
      description: "Built an e-commerce platform with payment gateway integration. Managed the backend logic for order processing and inventory updates.",
      imgUrl: ecomm,
    },
    {
      title: "Portfolio Website",
      description: "Created a personal portfolio website to showcase my projects. Focused on building a smooth navigation system and deploying it to the cloud.",
      imgUrl: portfolioimg,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Here are some highlights of the projects I have worked on.</p>
            <Row>
              {projects.map((project, index) => (
                <Col md={4} key={index} className="project-card">
                  <div className="proj-imgbx">
                    <img src={project.imgUrl} alt={project.title} />
                    <div className="proj-txtx">
                      <h4>{project.title}</h4>
                      <span>{project.description}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
