import React from 'react'
import './Services.css'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import HeadNav from '../components/HeadNav'
function Services() {
    return (

        <div>
            <HeadNav></HeadNav>
            <div className='bg-black'>

                <div>
                    <img className='serviceimage' src="https://i.postimg.cc/02m50Myj/close-up-man-robotic-process-automation-concept-2.png" alt="services" />
                    <p className='servicehead'>SERVICES</p>
                </div>
                <div className='parag'>
                    <p className='text-white text-center p-5'>ultimate destination for comprehensive Full Stack Development solutions. With a robust suite of services tailored to your needs, we specialize in crafting cutting-edge digital experiences.</p>
                </div>
                <div className='full'>
                    <h1 className='text-white p-5'><b>Our Full-Stack <br /> Development Services</b></h1>
                    <div className='p-5' >
                        <div className='development-row p-3'>
                            <div className='development'>
                                <img src="https://i.postimg.cc/BbgwfLbT/Frame-52.png" alt="" />
                                <h4 className='text-white'>Python</h4>
                                <p className='text-white p-3' style={{ fontSize: "14px" }}>Harness the power of Python's simplicity and versatility for robust backend development, data analysis, and AI applications.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/63G7ygvq/Frame-53.png" alt="" />
                                <h4 className='text-white'>React</h4>
                                <p className='text-white p-3' style={{ fontSize: "14px" }}>Create interactive and reusable UI components with React, a JavaScript library renowned for its efficiency and flexibility in building single-page applications.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/cCSJ6HWk/Frame-54.png" alt="" />
                                <h4 className='text-white'>Javascript</h4>
                                <p className='text-white p-3' style={{ fontSize: "14px" }}>Enhance user interactions and build dynamic web applications with JavaScript, the backbone of modern web development.</p>
                            </div>
                        </div>
                        <div className='development-row p-3'>

                            <div className='development'>
                                <img src="https://i.postimg.cc/XYz7dx3C/Frame-55.png" alt="" />
                                <h4 className='text-white'>Java</h4>
                                <p className='text-white p-3' style={{ fontSize: "14px" }}>Leverage the robustness and platform independence of Java for enterprise-grade backend development, Android app development, and more.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/k4rJh42M/Frame-55-1.png" alt="" />
                                <h4 className='text-white'>Bootstrap</h4>
                                <p className='text-white p-3' style={{ fontSize: "14px" }}>Expedite frontend development and ensure responsiveness across devices with Bootstrap, a popular CSS framework featuring pre-designed components and layouts.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/TYkRvQK4/Frame-55-2.png" alt="" />
                                <h4 className='text-white'>Angular</h4>
                                <p className='text-white p-3' style={{ fontSize: "14px" }}> Develop dynamic and scalable web applications with Angular, a TypeScript-based framework backed by Google, offering robust features for frontend development.</p>
                            </div>
                        </div>

                        <div className='development-row p-3'>
                            <div className='development'>
                                <img src="https://i.postimg.cc/vmnM9s3J/Frame-55-3.png" alt="" />
                                <h4 className='text-white'>Flutter</h4>
                                <p className='text-white p-3' style={{ fontSize: "14px" }}>Craft beautiful native interfaces for mobile, web, and desktop from a single codebase with Flutter, Google's UI toolkit for building natively compiled applications.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/tTtjSz0D/Frame-56.png" alt="" />
                                <h4 className='text-white'>MongoDB</h4>
                                <p className='text-white p-3' style={{ fontSize: "14px" }}>Embrace the flexibility and scalability of MongoDB, a NoSQL database, for efficient storage and retrieval of structured and unstructured data.</p>
                            </div>
                            <div className='development'>
                                <img src="https://i.postimg.cc/wTbdGvPK/Frame-57.png" alt="" />
                                <h4 className='text-white'>NodeJS</h4>
                                <p className='text-white p-3' style={{ fontSize: "14px" }}>Empower your applications with real-time, event-driven capabilities using Node.js, a JavaScript runtime built on Chrome's V8 engine, ideal for building scalable network applications.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='prod'>
                    <h1 className='text-white p-5'><b>Product Development Services</b></h1>
                   <div className='cards-container p-5'>
                        <div className='card1'>
                            <img src="https://i.postimg.cc/YqmRm6Vy/unsplash-SYTO3xs06f-U.png" alt="" />
                            <div class="overlay">
                                <h3>Application Development</h3>
                                <p>Ultimate destination for comprehensive Full Stack Development solutions. With a robust suite of services tailored to your needs, we specialize in crafting cutting-edge digital experiences.</p>
                            </div>
                        </div>
                        <div className='card1'>
                            <img src="https://i.postimg.cc/Y9sNv0xH/unsplash-SYTO3xs06f-U-1.png" alt="" />
                            <div class="overlay">
                                <h3>Responsive Website Development</h3>
                                <p>Elevate your online presence with visually stunning and highly functional websites optimized for viewing on any device, ensuring an exceptional user experience regardless of screen size or orientation.</p>
                            </div>
                        </div>
                        <div className='card1'>
                            <img src="https://i.postimg.cc/cLhs7ntf/unsplash-SYTO3xs06f-U-2.png" alt="" />
                            <div class="overlay">
                                <h3>UI/UX Design Service</h3>
                                <p>Put user experience at the forefront of your digital products with our expert UI/UX design services. We blend aesthetics with functionality to create intuitive and engaging interfaces that resonate with your target audience.</p>
                            </div>
                        </div>
                        <div className='card1'>
                            <img src="https://i.postimg.cc/T30tRRBR/unsplash-SYTO3xs06f-U-4.png" alt="" />
                            <div class="overlay">
                                <h3>Hosting Solutions</h3>
                                <p>Secure, reliable, and scalable hosting solutions tailored to your specific requirements. Whether you need shared hosting, dedicated servers, cloud hosting, or managed hosting services.</p>
                            </div>
                        </div>
                        <div className='card1'>
                            <img src="https://i.postimg.cc/qq2GW08H/unsplash-SYTO3xs06f-U-5.png" alt="" />
                            <div class="overlay">
                                <h3>CMS Maintenance</h3>
                                <p>Keep your content management system (CMS) running smoothly with our comprehensive maintenance services. From regular updates and security patches to content management and performance optimization.</p>
                            </div>
                        </div>
                        <div className='card1'>
                            <img src="https://i.postimg.cc/QMR1DwN8/unsplash-SYTO3xs06f-U-3.png" alt="" />
                            <div class="overlay">
                                <h3>Digital Marketing</h3>
                                <p>Amplify your online presence and reach your target audience with our strategic digital marketing solutions. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation.</p>
                            </div>
                        </div>
                   </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}
export default Services