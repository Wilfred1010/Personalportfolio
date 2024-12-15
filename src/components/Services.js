// wilfred monye 
// 301353973

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServiceCard } from './ServiceCard';
import webdevimg from "../assets/img/webdevimg.png";
import mobileapp from "../assets/img/mobileapp.png";
import ecomm from "../assets/img/ecomm.png";
import uiux from "../assets/img/uiux.png";
import ceo from "../assets/img/ceo.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () => {

  const services = [
    {
      title: "Web Development",
      description: "Building responsive and dynamic websites",
      imgUrl: webdevimg,
    },
    {
      title: "Mobile App Development",
      description: "Creating user-friendly mobile applications",
      imgUrl: mobileapp,
    },
    {
      title: "UI/UX Design",
      description: "Designing visually appealing and functional interfaces",
      imgUrl: uiux,
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side systems",
      imgUrl: webdevimg,
    },
    {
      title: "E-commerce Solutions",
      description: "Developing scalable e-commerce platforms",
      imgUrl: ecomm,
    },
    {
      title: "SEO Optimization",
      description: "Improving search engine visibility",
      imgUrl: ceo,
    },
  ];

  return (
    <section className="services" id="services">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Services</h2>
                  <p>Explore the wide range of services I offer to help bring your ideas to life.
                    From web development to UI/UX design, I provide top-notch solutions tailored to your needs.</p>
                  <Tab.Container id="services-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                  
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            services.map((service, index) => {
                              return (
                                <ServiceCard
                                  key={index}
                                  {...service}
                                />
                              )
                            })
                          }
                        </Row>
                  
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
