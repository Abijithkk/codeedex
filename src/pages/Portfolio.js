import React, { useEffect } from 'react'
import HeadNav from '../components/HeadNav'
import Card2 from './Card2';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';



function Portfolio() {

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
    }
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
    return (
        <div style={{ backgroundColor: "black", minHeight: "100vh", overflow: "hidden" }}>
            <HeadNav />
            <div id="animated-background"></div>
                 <h1 className='text-center mt-3 text-white'><b>OUR PROJECTS</b> </h1>
                 <p className='text-center text-white p-3' style={{fontFamily:"'Rubik', sans-serif"}}>At Codeedex Technologies, we deliver high-quality digital solutions, including website and mobile app development, hosting, software, and e-commerce sites. Our projects feature user-friendly designs, effective digital marketing, and innovative digital business cards. Each project highlights our commitment to excellence and customer satisfaction. Explore our work to see how we can elevate your business.</p>
                <Card2></Card2>
                <Footer></Footer>
                <div style={styles.whatsappIcon}>
                <Link to={"https://wa.me/919778564277"} style={{color:"white"}}>
                    <a  target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default Portfolio