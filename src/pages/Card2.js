import React from 'react';
import './Card2.css';

const cardData = [
  {
    imgSrc: "https://i.postimg.cc/zv9mKvFx/Iphone-11-Screen.png",
    title: "TMAC",
    description: "TMAC is an innovative training management system designed to streamline and enhance employee training programs.   ",
    link: "https://example.com/slb" // Add your URL here
  },
  {
    imgSrc: "https://i.postimg.cc/02WKRs2c/Mac-Book-Pro-Mockup-Right-View.png",
    title: "Amana",
    description: "Amana is a comprehensive tailor management system designed to streamline the assignment of tailoring tasks and manage all related measurements efficiently.   ",
    link: "http://amanathobe.com/" // Add your URL here
  },
  {
    imgSrc: "https://i.postimg.cc/cCt2xZGw/Airpods.png",
    title: "DWANI",
    description: "Step into the vibrant world of dance with Dwani Nrithavidhyalaya Trust, a renowned dance academy dedicated to the preservation, promotion, and celebration of the rich cultural heritage of dance.  ",
    link: "http://dwaninrithavidhyalayatrust.in" // Add your URL here
  },
  {
    imgSrc: "https://i.postimg.cc/VNzxj3XP/Magic-mouse.png",
    title: "Mr.Go",
    description: "Mr.Go is a comprehensive courier management and tracking system designed to streamline the process of sending and tracking packages.   ",
    link: "https://mrgo.in" // Add your URL here
  },
  {
    imgSrc: "https://i.postimg.cc/Cx9MYjy5/emana.jpg",
    title: "Eman Bakeries",
    description: "At Eman Bakeries, baking is not just a profession; it's a passion passed down through generations, We strive to preserve the authenticity of our baked goods while embracing innovation and creativity.    ",
    link: "http://emanbakeries.com" // Add your URL here
  },
  {
    imgSrc: "https://i.postimg.cc/zDpJ3mm9/ushar.jpg",
    title: "Usher Academy",
    description: "Usher Academia is your one-stop destination for exploring and securing admission to prestigious universities across various states in India.  ",
    link: "http://Usheracademia.in" // Add your URL here
  }
];

function Card2() {
  return (
    <div className="card-containerl">
      {cardData.map((card, idx) => (
        <a href={card.link} key={idx} className="cardf mt-5" target="_blank" rel="noopener noreferrer">
          <img src={card.imgSrc} alt="Profile" className="profile-image" />
          <h2 className="card-heading">{card.title}</h2>
          <p className="card-description">{card.description}</p>
        </a>
      ))}
    </div>
  );
}

export default Card2;
