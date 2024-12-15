// wilfred monye 
// 301353973

import { Col } from "react-bootstrap";

export const  ServiceCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="service-imgbx">
        <img src={imgUrl} />
        <div className="service-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
