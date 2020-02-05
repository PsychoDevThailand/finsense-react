import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './layout.css'

const Footer = () => {
  const footerData = [
    {
      title: 'FINSENSE',
      link: 'Careers'
    },
    {
      title: 'DEVELOPER',
      link: 'Get started'
    },
    {
      title: 'POLICY',
      link: 'Terms & Conditions'
    }
  ]

  const footerList = footerData.map((data, index) =>
    <Col key={index} md={4}>
      <h5>{data.title}</h5>
      <ul className="footer-link">
        <li>
          <FontAwesomeIcon icon={faChevronRight} color="dodgerblue" />
          <a href="#">{data.link}</a>
        </li>
      </ul>
    </Col>
  )

  return (
    <>
      <div className="pt-5"></div>
      <footer className="py-5 bg-dark text-white">
        <Container>
          <div className="pt-5"></div>
          <Row>
            {footerList}
          </Row>
          <div className="pt-5"></div>
          <div className="pt-5"></div>
          <p className="text-center">Copyright 2020 All rights reserved.</p>
        </Container>
      </footer>
    </>
  )
}

export default Footer
