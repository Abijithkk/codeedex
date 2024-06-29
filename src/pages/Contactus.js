import React, { useState } from 'react';
import './Contact.css';
import HeadNav from '../components/HeadNav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '' // Add service to the state
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message, service } = formData;
        const mailtoLink = `mailto:info@codeedextechnologies.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
        window.location.href = mailtoLink;
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
            <div className="oppo">
                <div className="containercon">
                    <div className="form-containercon">
                        <div className="left-containerop">
                            <div className="left-inner-container">
                                <h2 className="nu">Let's Chat</h2>
                                <p>Whether you have a question, want to start a project or simply want to connect.</p>
                                <br />
                                <p>Feel free to send me a message in the contact form</p>
                            </div>
                        </div>
                        <div className="right-containerop">
                            <div className="right-inner-container">
                                <form onSubmit={handleSubmit}>
                                    <h2 className="lg-view nu">Contact Us</h2>
                                    <h2 className="sm-view nu">Let's Chat</h2>
                                    <div className="social-container">
                                        <Link to={'https://www.instagram.com/codeedextechnologies/?hl=en'}>
                                            <i className="fa-brands fa-square-instagram text-black fs-3 p-2"></i>
                                        </Link>
                                        <Link to={'https://www.facebook.com/codeedextechnologies?mibextid=LQQJ4d'}>
                                            <i className="fa-brands fa-facebook text-black fs-3 p-2"></i>
                                        </Link>
                                        <Link to={'https://www.linkedin.com/company/codeedex-technologies/'}>
                                            <i className="fa-brands fa-linkedin text-black fs-3 p-2"></i>
                                        </Link>
                                        <Link to={'https://www.youtube.com/@CodeedexTechnologies/featured'}>
                                            <i className="fa-brands fa-youtube text-black fs-3 p-2"></i>
                                        </Link>
                                    </div>
                                    <input
                                        className="input1"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="input1"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="input1"
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <select
                                        className="input1"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select Service</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="App Development">E-Commerce Website</option>
                                        <option value="App Development">UI/UX Design</option>
                                        <option value="App Development">Software Development</option>
                                        <option value="SEO Services">SEO Services</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="App Development">Digital Business Card</option>
                                    </select>
                                    <textarea
                                        className="textarea1"
                                        rows="4"
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    <button className="btnoy" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div style={styles.whatsappIcon}>
                <Link to={"https://wa.me/919778564277"} style={{ color: "white" }}>
                    <i className="fab fa-whatsapp"></i>
                </Link>
            </div>
        </div>
    );
}

export default Contactus;
