import React from 'react'
import { Card, Col, Row, Image } from 'react-bootstrap'

const Partner = () => {
  const cardPartner = (
    <Card className="text-center border-0 pt-5">
      <Card.Body>
        <Card.Title>TRUSTED PARTNERS</Card.Title>
        <div className="border border-info"></div>
        <br />
        <Card.Text>REGARDLESS OF SIZE, YOU CAN BE OUR PARTNERS</Card.Text>
      </Card.Body>
    </Card>
  );

  const logos = ['/client_logo-1.png', '/client_logo-2.png', '/client_logo-3.png', '/client_logo-4.png']

  const logoList = logos.map((logo, index) =>
    <Col key={index} md={3}>
      <Image src={logo} />
    </Col>
  );

  return (
    <>
      <div className="pt-5"></div>
      {cardPartner}
      <Row className="pt-5">{logoList}</Row>
    </>
  )
}

export default Partner
