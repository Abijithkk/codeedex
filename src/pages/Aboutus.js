import React, { useEffect, useState } from 'react';
import './About.css';
import Footer from '../components/Footer';
import HeadNav from '../components/HeadNav';
import Card3 from './Card3';
import { Link } from 'react-router-dom';

function Aboutus() {
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
            text: "The Mr.Go platform is fantastic! It's easy to use and has made scheduling deliveries so convenient for me.",
            author: "-Mrgo"
        },
        {
            text: "Although the wait time at this dentist’s office was longer than anticipated, the exceptional quality of care more than compensated for it. The staff exhibited friendliness, expertise, and ensured my comfort throughout the entire visit.",
            author: "-TMAC"
        },
        {
            text: "The academic admission website your team created is outstanding! It's intuitive, informative, and has significantly streamlined our application process.",
            author: "-Usher Academy"
        },
        {
            text: "We love the bakery website your team created! It’s beautiful, user-friendly, and has really helped increase our customer engagement.",
            author: "-Eman Bakes"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === quotes.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [quotes.length]);

    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS('animated-background', {
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#77a3a3'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#77a3a3',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        }
    }, []);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    const styles = {
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

    return (
        <div>
            <HeadNav />
            <div id="animated-background"></div>
            <div className="bg-black text-white">
                <div className='mains'>
                    <h1 className='text-center mt-5 ot'>ABOUT CODEEDEX</h1>
                    <p className='text-center p-4 at' style={{ fontSize: "17px" }}>
                        <span>Codeedex is a leading provider of high-quality, affordable, and convenient websites/Application
                        for businesses in the digital age. With a focus on affordability and EMI options, we provide a
                        one-of-a-kind solution for businesses seeking to prosper in the digital age. We have experienced
                        developers, skilled in delivering excellence, meticulously craft websites that not only meet but exceed client
                        expectations. Our experience guarantees that each website is visually appealing and functionally better,
                        resulting in increased user engagement and business success.</span><br /><br />
                        <span>Our portfolio demonstrates designers commitment to excellence
                        and client happiness. We had regularly completed successful projects across multiple industries, making us a reliable partner for
                        both startups and established businesses seeking digital transformation.</span><br /><br />
                        <span>Choose Codeedex for a journey of success,
                        where quality knows no bounds and budgets are no barrier.</span>
                    </p>
                </div>
                <div style={{zIndex:'2'}} className='image123'>
                    <img src="https://i.postimg.cc/bNnFby7N/2150010125-2.png" alt="" />
                    <div className='lead'>
                        <h1>Leading the charge for the digital entertainment revolution</h1>
                        <p>At Codeedex, we are dedicated to providing a seamless and unforgettable experience for our clients. With a focus on user-centric design and functionality, We ensures that every project is tailored to meet the unique needs of our clients and their audiences. From immersive user experiences to interactive streaming platforms, we specialize in bringing ideas to life in the digital realm.</p>
                        <h1>Providing simple answers to complex problems</h1>
                        <p>We specialize in providing simple answers to complex problems. With a team comprising experienced developers, passionate designers, and a track record of successful projects, we are committed to simplifying challenges and delivering exceptional results.</p>
                    </div>
                </div>
                <div style={{zIndex:'2'}} className='services p-5'>
                    <h1>Services</h1>
                    <p style={{ fontSize: "19px" }} className='ot'>At Codeedex, we're dedicated to delivering results that exceed expectations. Partner with us and unlock the full potential of your online presence.</p>
                    
                    < Card3 />
                </div>
                <div className='clients p-5'>
                    <h1>Client says</h1>
                    <div className="slider-container">
                        <div className="quote-container">
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
            </div>
            <Footer />
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

export default Aboutus;
