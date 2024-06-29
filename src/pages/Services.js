import React from 'react';
import './Services.css';
import Footer from '../components/Footer';
import HeadNav from '../components/HeadNav';
import { Link } from 'react-router-dom';

const services = [
    {
        id: '1',
        title: 'Application Development',
        image: 'https://i.postimg.cc/HWbMcQDD/unsplash-SYTO3xs06f-U.png',
        description: 'Ultimate destination for comprehensive Full Stack Development solutions. With a robust suite of services tailored to your needs, we specialize in crafting cutting-edge digital experiences.',
    },
    {
        id: '2',
        title: 'Responsive Website Development',
        image: 'https://i.postimg.cc/SKVTpwdd/unsplash-SYTO3xs06f-U-1.png',
        description: 'Elevate your online presence with visually stunning and highly functional websites optimized for viewing on any device, ensuring an exceptional user experience regardless of screen size or orientation.',
    },
    {
        id: '3',
        title: 'UI/UX Design Service',
        image: 'https://i.postimg.cc/xC46XMWb/unsplash-SYTO3xs06f-U-2.png',
        description: 'Put user experience at the forefront of your digital products with our expert UI/UX design services. We blend aesthetics with functionality to create intuitive and engaging interfaces that resonate with your target audience.',
    },
    {
        id: '4',
        title: 'Hosting Solutions',
        image: 'https://i.postimg.cc/3ryTnBrV/unsplash-SYTO3xs06f-U-3.png',
        description: 'Secure, reliable, and scalable hosting solutions tailored to your specific requirements. Whether you need shared hosting, dedicated servers, cloud hosting, or managed hosting services.',
    },
    {
        id: '5',
        title: 'CMS Maintenance',
        image: 'https://i.postimg.cc/tCWHH4xz/unsplash-SYTO3xs06f-U-4.png',
        description: 'Keep your content management system (CMS) running smoothly with our comprehensive maintenance services. From regular updates and security patches to content management and performance optimization.',
    },
    {
        id: '6',
        title: 'Digital Marketing',
        image: 'https://i.postimg.cc/T3cMpNQL/unsplash-SYTO3xs06f-U-5.png',
        description: 'Amplify your online presence and reach your target audience with our strategic digital marketing solutions. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation.',
    },
];

function Services() {

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

    return (
        <div>
            <HeadNav />
            <div className='bg-black'>
                <div>
                    <img className='serviceimage' src="https://i.postimg.cc/02m50Myj/close-up-man-robotic-process-automation-concept-2.png" alt="services" />
                    <p className='servicehead'>SERVICES</p>
                </div>
                <div className='parag'>
                    <p className='text-white text-center p-5 ot'>Ultimate destination for comprehensive Full Stack Development solutions. With a robust suite of services tailored to your needs, we specialize in crafting cutting-edge digital experiences.</p>
                </div>
                <div className='full'>
                    <h1 className='text-white p-5'><b className='at'>Our Full-Stack <br /> Development Services</b></h1>
                    <div className='p-5 moil'>
                        <div className='development-row p-3'>
                            <div className='development'>
                                <img src="https://i.postimg.cc/BbgwfLbT/Frame-52.png" alt="Python" />
                                <h4 className='text-white'>Python</h4>
                                <p className='text-white p-3 ot'>Harness the power of Python's simplicity and versatility for robust backend development, data analysis, and AI applications.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/63G7ygvq/Frame-53.png" alt="React" />
                                <h4 className='text-white'>React</h4>
                                <p className='text-white p-3 ot'>Create interactive and reusable UI components with React, a JavaScript library renowned for its efficiency and flexibility in building single-page applications.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/cCSJ6HWk/Frame-54.png" alt="JavaScript" />
                                <h4 className='text-white'>JavaScript</h4>
                                <p className='text-white p-3 ot'>Enhance user interactions and build dynamic web applications with JavaScript, the backbone of modern web development.</p>
                            </div>
                        </div>
                        <div className='development-row p-3'>
                            <div className='development'>
                                <img src="https://i.postimg.cc/vmnM9s3J/Frame-55-3.png" alt="Flutter" />
                                <h4 className='text-white'>Flutter</h4>
                                <p className='text-white p-3 ot'>Craft beautiful native interfaces for mobile, web, and desktop from a single codebase with Flutter, Google's UI toolkit for building natively compiled applications.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/tTtjSz0D/Frame-56.png" alt="MongoDB" />
                                <h4 className='text-white'>MongoDB</h4>
                                <p className='text-white p-3 ot'>Embrace the flexibility and scalability of MongoDB, a NoSQL database, for efficient storage and retrieval of structured and unstructured data.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/wTbdGvPK/Frame-57.png" alt="NodeJS" />
                                <h4 className='text-white'>NodeJS</h4>
                                <p className='text-white p-3 ot'>Empower your applications with real-time, event-driven capabilities using Node.js, a JavaScript runtime built on Chrome's V8 engine, ideal for building scalable network applications.</p>
                            </div>
                        </div>
                        <div className='development-row p-3'>
                            <div className='development'>
                                <img src="https://i.postimg.cc/XYz7dx3C/Frame-55.png" alt="Java" />
                                <h4 className='text-white'>Java</h4>
                                <p className='text-white p-3 ot'>Leverage the robustness and platform independence of Java for enterprise-grade backend development, Android app development, and more.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/k4rJh42M/Frame-55-1.png" alt="Bootstrap" />
                                <h4 className='text-white'>Bootstrap</h4>
                                <p className='text-white p-3 ot'>Expedite frontend development and ensure responsiveness across devices with Bootstrap, a popular CSS framework featuring pre-designed components and layouts.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/TYkRvQK4/Frame-55-2.png" alt="Angular" />
                                <h4 className='text-white'>Angular</h4>
                                <p className='text-white p-3 ot'> Develop dynamic and scalable web applications with Angular, a TypeScript-based framework backed by Google, offering robust features for frontend development.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prod">
                    <h1 className="text-white p-5"><b>Product Development Services</b></h1>
                    <div className="cards-container">
                        {services.map(service => (
                            <div className="card" key={service.id}>
                                <img src={service.image} alt={service.title} />
                                <div className="overlay">
                                    <h1><b>{service.title}</b></h1>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
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

export default Services;
