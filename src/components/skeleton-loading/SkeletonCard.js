import React from "react";
import Skeleton from "react-loading-skeleton";
import { Container, Row, Col } from "react-bootstrap";

const SkeletonCard = () => {
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={3}>
          <ul style={skeletonStyle}>
            {Array(6)
              .fill()
              .map((item, index) => (
                <li key={index}>
                  <Skeleton height={60} width={180} />
                </li>
              ))}
          </ul>
        </Col>
        <Col md={4}></Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

const skeletonStyle = {
  listStyle:'none',
  marginTop:'48px'
}

export default SkeletonCard;
