import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Card3.css';

const cardData = [
  {
    imgSrc: "https://i.postimg.cc/5Nn1vcSr/fluent-mdl2-website.png",
    title: "Website Design & Development",
    text: "Crafting visually appealing and functional websites tailored to your business needs, ensuring a seamless user experience across all devices."
  },
  {
    imgSrc: "https://i.postimg.cc/SQGpF03K/carbon-application.png",
    title: "Mobile Application Development",
    text: "Building custom mobile applications for iOS and Android platforms, leveraging the latest technologies to bring your ideas to life."
  },
  {
    imgSrc: "https://i.postimg.cc/3N7Fwmxq/ion-server-outline-1.png",
    title: "Domain & Hosting",
    text: "Providing domain registration services and reliable hosting solutions to establish your online presence with stability and security."
  },
  {
    imgSrc: "https://i.postimg.cc/htXFdXjJ/eos-icons-application.png",
    title: "Software Deveolpment",
    text: "Developing scalable and efficient software solutions tailored to streamline your business operations and enhance productivity."
  },
  {
    imgSrc: "https://i.postimg.cc/yxL5JKCX/mdi-cart.png",
    title: "E-Commerce Website",
    text: "Designing and developing online stores that are user-friendly, secure, and equipped with features to drive sales and maximize conversions."
  },
  
  {
    imgSrc: "https://i.postimg.cc/TwKZ98jx/carbon-application-web.png",
    title: "UI/UX Design",
    text: "Creating intuitive and visually appealing user interfaces (UI) coupled with seamless user experiences (UX) to enhance customer satisfaction and engagement."
  },
  {
    imgSrc: "https://i.postimg.cc/YS3NjjTD/arcticons-emoji-web.png",
    title: "SEO & CMS",
    text: "Optimizing websites for search engines (SEO) to improve visibility and drive organic traffic, while also offering content management system (CMS) solutions for easy website management."
  },

  {
    imgSrc: "https://i.postimg.cc/JzRvFH3P/icon-park-outline-market-analysis.png",
    title: "Digital Marketing",
    text: "Implementing strategic digital marketing campaigns across various channels such as social media, email, and search engines to reach and engage your target audience effectively."
  },
  {
    imgSrc: "https://i.postimg.cc/tgf460pb/mdi-business-card.png",
    title: "Digital Business Card",
    text: "Designing and developing digital business cards that are interactive, shareable, and environmentally friendly, providing a modern and professional way to network and showcase your business information."
  },
];

function Card3() {
  return (
    <Container style={{zIndex:'2'}}>
      <Row>
        {cardData.map((card, idx) => (
          <Col key={idx} md={4} className="d-flex justify-content-center">
            <div className="card3">
              <div className="icon">
                <img src={card.imgSrc} alt="Icon" />
              </div>
              <p className="title">{card.title}</p>
              <p className="text">{card.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Card3;
