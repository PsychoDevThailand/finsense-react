import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Slider from "../components/slider"
import OurService from '../components/Card/our-service'
import Deck from '../components/Card/deck'
import Partner from '../components/partner'
import { Container, Card } from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <Slider />
    <Container>
      <OurService />
      <Deck />
      <Partner />
    </Container>
  </Layout>
)

export default IndexPage
