import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className="card-container">
      <div className="card-row">
        <div className="cardm">
          <img style={{ width: "100%", height: "100%" }} src="https://i.postimg.cc/FKXrK8GT/7127986.jpg" alt="Card Image" />
          <div className="card__content">
            <p className="card__title1">Full Stack Development</p>
            <p className="card__description">Experience the latest tech with our full stack dev services. Our skilled team crafts strong, flexible solutions for your needs, from web and mobile apps to custom software. We've got it all covered, tailored just for you.</p>
          </div>
        </div>
        <div className="cardm">
          <img style={{ width: "100%", height: "100%" }} src="https://i.postimg.cc/qvg0PxGr/representation-user-experience-interface-design.jpg" alt="Card Image" />
          <div className="card__content">
            <p className="card__title1">Application Development</p>
            <p className="card__description">Ultimate destination for comprehensive Full Stack Development solutions. With a robust suite of services tailored to your needs, we specialize in crafting cutting-edge digital experiences.</p>
          </div>
        </div>
        <div className="cardm">
          <img style={{ width: "100%", height: "100%" }} src="https://i.postimg.cc/fLtQjvHV/website-hosting-with-man-holding-tablet.jpg" alt="Card Image" />
          <div className="card__content">
            <p className="card__title">Hosting</p>
            <p className="card__description">Let us handle the tech stuff. With Codeedex, your website or app is safe. Our hosting ensures top performance, security, and uptime, letting you focus on your business.</p>
          </div>
        </div>
        <div className="cardm">
          <img style={{ width: "100%", height: "100%" }} src="https://i.postimg.cc/QdxPJbCj/content-management-system-strategy-cms-concept.jpg" alt="Card Image" />
          <div className="card__content">
            <p className="card__title">CMS Maintenance</p>
            <p className="card__description">We help keep your website fresh and running smoothly with our CMS maintenance. Our team takes care of everything. we make sure your CMS is always safe and up-to-date.</p>
          </div>
        </div>
        <div className="cardm">
          <img style={{ width: "100%", height: "100%" }} src="https://i.postimg.cc/W401TX7M/5757453.jpg" alt="Card Image" />
          <div className="card__content">
            <p className="card__title">UI/UX Design</p>
            <p className="card__description">We create easy-to-use interfaces that attract users and boost sales. Whether you're starting fresh or updating, our designs will surpass what you expect.</p>
          </div>
        </div>
        <div className="cardm">
          <img style={{ width: "100%", height: "100%" }} src="https://i.postimg.cc/zv77ysnK/1690.jpg" alt="Card Image" />
          <div className="card__content">
            <p className="card__title">SEO</p>
            <p className="card__description">Improve your online presence and reach your audience with our SEO services. Our experts use proven strategies to boost your site's search rankings and drive organic traffic,</p>
          </div>
        </div>
        <div className="cardm">
          <img style={{ width: "100%", height: "100%" }} src="https://i.postimg.cc/vHmLPSr2/digital-marketing-with-icons-business-people.jpg" alt="Card Image" />
          <div className="card__content">
            <p className="card__title">Digital Marketing</p>
            <p className="card__description">Expand your online presence and boost your brand with our digital marketing services. We handle social media and PPC ads to connect you with your audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
