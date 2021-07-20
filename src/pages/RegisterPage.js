import { useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import FormCard from "../components/Form";


function RegisterPage() {

    function tryRegister(){

    }


    return (
        <Container>
            <span>fafsd</span>
          <Row>
            <Col></Col>
            <Col>
              <Card style={cardStyle}>
                <Card.Body>
                  <Card.Title className="text-center text-primary">Register</Card.Title>
                  <FormCard register={tryRegister} ></FormCard>
                </Card.Body>
              </Card>
              <span style={registerTextStyle} className="text-right text-primary">Already have an account?<span>➡️</span></span>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      );
}

const registerTextStyle = {
    fontSize:'12px',
    cursor:'pointer'
  }
  const cardStyle= {
    'marginTop':'15px',
    "borderRadius":"40px"
  }

export default RegisterPage;