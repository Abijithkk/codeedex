import React from 'react'
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
    return (
        <div style={{ backgroundColor: "black", minHeight: "100vh", overflow: "hidden" }}>
            <HeadNav />
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