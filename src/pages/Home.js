import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import web from '../assets/website.mp4';
import './Home.css'; // Import CSS file for styling
import Footer from '../components/Footer';
import { Col, Row } from 'react-bootstrap';
import Card from './Card';
import { Link } from 'react-router-dom';
import animation from '../assets/animation.mp4'

const services = [
    {
        id: 'c1',
        title: 'Full Stack Development',
        image: 'https://i.postimg.cc/BbVmYPHv/software-developer-6521720-1920.jpg',
    },
    {
        id: 'c2',
        title: 'Application Development',
        image: 'https://i.postimg.cc/qvg0PxGr/representation-user-experience-interface-design.jpg',
    },
    {
        id: 'c3',
        title: 'Hosting',
        image: 'https://i.postimg.cc/fLtQjvHV/website-hosting-with-man-holding-tablet.jpg',
    },
    {
        id: 'c4',
        title: 'CMS Maintenance',
        image: 'https://i.postimg.cc/L59Wccx0/4847496.jpg',
    },
    {
        id: 'c5',
        title: 'UI/UX Design',
        image: 'https://i.postimg.cc/W401TX7M/5757453.jpg',
    },
    {
        id: 'c6',
        title: 'SEO',
        image: 'https://i.postimg.cc/zv77ysnK/1690.jpg',
    },
    {
        id: 'c7',
        title: 'Digital Marketing',
        image: 'https://i.postimg.cc/vHmLPSr2/digital-marketing-with-icons-business-people.jpg',
    },

];
function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const quotes = [
        {
            text: "The Amana web application is excellent! It has made managing our tailoring services so much easier and more efficient.",
            author: "-Amana Thobe"
        },
        {
            text: "We are extremely satisfied with the website your team created for us. It looks fantastic, works flawlessly, and has significantly improved our online presence.",
            author: "-Dwani Nirtha Vidyalaya"
        },
        {
            text: "The Mr.Go platform is fantastic! It's easy to use and has made scheduling deliveries so convenient for me.",
            author: "-Mrgo"
        },
        {
            text: "The TMAC admin panel is fantastic! It’s user-friendly and has significantly improved how we manage employee training programs.",
            author: "-TMAC"
        },
        {
            text: "The academic admission website your team created is outstanding! It's intuitive, informative, and has significantly streamlined our application process.",
            author: "-Usher Academy"
        },
        {
            text: "We love the bakery website your team created! It’s beautiful, user-friendly, and has really helped increase our customer engagement.",
            author: "-Eman Bakes"
        },
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === quotes.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000); // Change slide every 5 seconds (5000 milliseconds)
        return () => clearInterval(interval);
    }, [quotes.length]);
    const handleDotClick = (index) => {
        setCurrentSlide(index);

    };

    const styles = {
        team: {
            padding: '5rem',
            backgroundColor: "black"
        },
        circleContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '5rem',
            gap: '4rem'
        },
        circle: {
            margin: '1rem',
            textAlign: 'center',
            width: '200px',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 7px white'
        },
        circleImage: {
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem'
        },
        textCenter: {
            textAlign: 'center'
        },
        mt3: {
            marginTop: '1rem'
        },
        whatsappIcon: {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#25D366',
            color: 'white',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            zIndex: 1000,
        }
    };

    const logos = [
        'https://i.postimg.cc/j5R6dwKc/amana-logo.png', // Replace with actual paths to your logo images
        'https://i.postimg.cc/Bb36xM1H/TCMA-ICON.png',
        'https://i.postimg.cc/yY79M3c0/Screenshot-2024-05-27-120051-removebg-preview.png',
        'https://i.postimg.cc/v8rwcD9n/Screenshot-2024-05-27-145138-removebg-preview.png',
        'https://i.postimg.cc/fbR8Dgdj/usherlogo-removebg-preview.png',
        'https://i.postimg.cc/vZQztS0F/logoemen.png'
    ];
    const infiniteLogos = logos.concat(logos);

    const phoneNumber = '+91 97785 64277'; // Replace with your phone number

    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    const [hoveredCard, setHoveredCard] = useState('c1');

    const handleMouseEnter = (serviceId) => {
        if (hoveredCard !== serviceId) {
            setHoveredCard(serviceId);
        }
    };

    const handleMouseLeave = () => {
        setHoveredCard('c1');
    };
    return (
        <div className='main'>
            <div className='header-container'>
                <Header />
            </div>
            <div className='video-background'>
            <video autoPlay muted loop playsInline className='video' controls={false}>
                    <source src={web} type='video/mp4' />
                </video>
                <div className='content'>
                    <h1 className='p-3 text-center empo' style={{ fontSize: "43px", color: "white" }}><b className='kt'>Empowering Tomorrow's <span style={{ marginLeft: "-3px" }}>Technological Triumphs</span></b></h1>
                    <p className='at text-center' style={{ fontSize: "18px", color: "white" }}>Explore the Codeedex Revolution</p>

                    <Link to={'/contactus'}><button  style={{ backgroundColor: "transparent", borderColor: "white", marginLeft: "38%" }} className='btn btn-primary'>Request a Callback</button></Link>

                </div>
            </div>
            <div className='kop p-5'>
                <Row>
                    <Col md={6} className='mt-5'>
                        <div>
                            <h2 className='text-white'><b className='ot' >Leading the charge for the digital entertainment revolution</b></h2>
                            <p className='text-white at'>At Codeedex, we are dedicated to providing a seamless and unforgettable
                                experience for our clients. With a focus on user-centric design and functionality,
                                We ensures that every project is tailored to meet the unique needs of our clients
                                and their audiences. From immersive user experiences to interactive streaming
                                platforms, we specialize in bringing ideas to life in the digital realm.</p>
                            <h2 className='text-white'><b className='ot'>Providing simple answers to complex problems</b></h2>
                            <p className='text-white at'>We specialize in providing simple answers to complex problems. With a team comprising experienced developers, passionate designers, and a track record of successful projects, we are committed to simplifying challenges and delivering exceptional results.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                        <video autoPlay muted loop playsInline className='anivid' controls={false}>
                                <source src={animation} type='video/mp4' />
                            </video>

                        </div>
                    </Col>
                </Row>
            </div>
            <div className='whycode p-5'>
                <h1 className='ot'>Why Codeedex?</h1>
                <div className="whycode-content mt-5">
                    <Row>
                        <Col md={4}>
                            <div className="image-container ">
                                <img src="https://i.postimg.cc/VNJTQhHN/Rectangle-113.png" alt="" />
                            </div>
                        </Col>
                        <Col md={8} >
                            <div className="text-container">
                                <p className='why at'>
                                    Codeedex is a leading provider of high-quality, affordable, and convenient websites/Application for businesses in the digital age.
                                    With a focus on affordability and EMI options, we provide a one-of-a-kind solution for businesses seeking to prosper in the digital
                                    age. We have experienced developers, skilled in delivering excellence, meticulously craft websites that not only meet but exceed client
                                    expectations. Our experience guarantees that each website is visually appealing and functionally better, resulting in increased user
                                    engagement and business success. <br />Our portfolio demonstrates designers commitment to excellence and client happiness. We had regularly
                                    completed successful projects across multiple industries, making us a reliable partner for both startups and established businesses
                                    seeking digital transformation. <br />Choose Codeedex for a journey of success, where quality knows no bounds and budgets are no barrier.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="serv p-5">
                <h1 className="text-white"><b className="ot">Our Services</b></h1>
                <div className="wrapperr">
                    <div className="containercards">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`cards ${hoveredCard === service.id ? 'hovered' : ''}`}
                                style={{ backgroundImage: `url(${service.image})` }}
                                onMouseEnter={() => handleMouseEnter(service.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="rows">
                                    <div className="icons">{service.id.slice(1)}</div>
                                    <div className="descriptions">
                                        <h4>{service.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Card></Card>
            </div>



            <div className='client'>
                <h1 className='ot'>Client says</h1>
                <div className="slider-container">
                    <div className="quote-container ">
                        <img src="https://i.postimg.cc/X79N1PJd/ooui-quotes-ltr.png" alt="" />
                        <p className="quote">{quotes[currentSlide].text}</p>
                        <p className="author">{quotes[currentSlide].author}</p>
                        <img src="https://i.postimg.cc/9MvVJPHL/ooui-quotes-rtl.png" alt="" />
                    </div>
                    <div className="dots">
                        {quotes.map((quote, index) => (
                            <span
                                key={index}
                                className={index === currentSlide ? "dot active" : "dot"}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* team */}
            <div style={styles.team} className='p-5  clientteam'>
                <h1 style={{ color: "white" }} className='text-center mb-5'> <b className='ot'>Our Clients</b></h1>
                <div className="carousel">
                    <div className="carousel-track">
                        {infiniteLogos.map((logo, index) => (
                            <div className="carousel-logo-wrapper" key={index}>
                                <img src={logo} alt={`Client Logo ${index + 1}`} className="carousel-logo" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Footer></Footer>
            <div style={styles.whatsappIcon}>
                <Link to={"https://wa.me/919778564277"} style={{ color: "white" }}>
                    <a target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </Link>
            </div>
        </div>
    );
}
export default Home;
