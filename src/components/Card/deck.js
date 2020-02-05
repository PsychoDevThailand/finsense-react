import React from 'react'
import { Card, CardDeck, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faRandom, faLock, faChartArea } from '@fortawesome/free-solid-svg-icons'

const Deck = () => {
  const getTitle = (text) => {
    return (<p align="center" className="font-weight-bold">{text}</p>)
  };

  const flexible = {
    title: getTitle('FLEXIBLE PAYMENT OPTIONS'),
    description: (
      <>
        <p align="justify">Your customers can now easily make a payment online with many modern payment options more than ever. With Finsense, you can accept payments from;</p>
        <p align="justify"><b>1. Thai QR (TQR)</b> - Support the merchant to accept payment from customers who pay using either the current or savings account as the source of funds. This type of QR payment is supported by most of the major Thai banks.  </p>
        <p align="justify"><b>2. Credit Card</b> - Support the merchant to accept payment from credit cards as the source of funds. Finsense has two schemes for you;</p>
        <p align="justify">(1) via web portral (Payment Gateway)</p>
        <p align="justify">(2) via QR code (QRCS) - Currently, QRCS is supported by VISA and Mastercard, making it compatible internationally.</p>
        <p align="justify"><b>3. Alipay &amp; WeChatPay</b> - Support the merchant to accept payment from 10 million of Chinese tourists who visit Thailand. </p>
        <p align="justify"><b>4. TrueMoney &amp; LinePay</b> - Support the merchant to accept payment from e-wallets from True &amp; LINE. </p>
      </>
    ),
    img: (<Card.Img variant="top" src={'/cns-1.jpg'} />),
    icon: (<FontAwesomeIcon icon={faCreditCard} size="3x" />)
  };

  const automated = {
    title: getTitle('AUTOMATED SETTLEMENT'),
    description: (
      <>
        <p align="justify">Easy to transfer payments with your business merchants and partners using our APIs. Handling settlement process more flexible without less resources. No more waiting days later. </p>
        <p align="justify"><b>1. Hourly to daily settlement</b> - Support the merchant who has multiple sub-merchants in a group, and need to transfer portion of sales revenue ASAP </p>
        <p align="justify"><b>2. Reduce your settlement resources</b> - With Finsense API,you can manage profit sharing scheme between your partner automatically. </p>
      </>
    ),
    img: (<Card.Img variant="top" src={'/cns-2.jpg'} />),
    icon: (<FontAwesomeIcon icon={faRandom} size="3x"/>)
  };

  const secured = {
    title: getTitle('Secured Authentication'),
    description: (
      <>
        <p align="justify">Would like to verify whether your sellers or sub-merchants provide their accepted bank account correctly? </p>
        <p align="justify"><b>1. Double authentication</b> - Support the merchant to verify multiple sub-merchants account before the actual settlement </p>
        <p align="justify"><b>2. Build trust between partners</b> - With Finsense API,your partners do not need to provide their bank account and submit in a form. Finsense brings automate checking solution to serve you. </p>
      </>
    ),
    img: (<Card.Img variant="top" src={'/cns-3.jpg'} />),
    icon: (<FontAwesomeIcon icon={faLock} size="3x"/>)
  }

  const consolidated = {
    title: getTitle('Consolidated transaction data'),
    description: (
      <>
        <p align="justify">Consolidate all payments and settlements in one simplify dashboard </p>
      </>
    ),
    img: (<Card.Img variant="top" src={'/cns-4.jpg'} />),
    icon: (<FontAwesomeIcon icon={faChartArea} size="3x"/>)
  }

  const deckData = [flexible, automated, secured, consolidated]

  const deckList = deckData.map((data, index) =>
    <Col key={index} md={6}>
      <Card className="border-0">
        {data.img}
        <Card.Body>
          <div className="text-center">
            {data.icon}
          </div>
          {data.title}
          {data.description}
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <>
      <CardDeck className="pt-5">
        {deckList}
      </CardDeck>
    </>
  )
}

export default Deck
