import React, { useEffect, useState } from 'react'
import './About.css'
import Footer from '../components/Footer';
import HeadNav from '../components/HeadNav';

function Aboutus() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const quotes = [
        {
            text: "Although the wait time at this dentist’s office was longer than anticipated, the exceptional quality of care more than compensated for it. The staff exhibited friendliness, expertise, and ensured my comfort throughout the entire visit.",
            author: "-Dwani Dance School"
        },
        {
            text: "Although the wait time at this dentist’s office was longer than anticipated, the exceptional quality of care more than compensated for it. ",
            author: "-Amana Thobe"
        },
        {
            text: "the exceptional quality of care more than compensated for it. The staff exhibited friendliness, expertise, and ensured my comfort throughout the entire visit.",
            author: "-Amana Thobe"
        },
        // Add more quotes here
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
    return (

        <div>
            <HeadNav></HeadNav>
            <div className='mains'>
                <h1 className='text-center mt-5'>ABOUT CODEEDEX</h1>
                <p className='text-center p-4' style={{fontSize:"17px"}}><span>Codeedex is a leading provider of high-quality, affordable, and convenient websites/Application
                    for businesses in the digital age. With a focus on affordability and EMI options, we provide a
                    one-of-a-kind solution for businesses seeking to prosper in the digital age. We have experienced
                    developers, skilled in delivering excellence, meticulously craft websites that not only meet but exceed client
                    expectations. Our experience guarantees that each website is visually appealing and functionally better,
                    resulting in increased user engagement and business success.</span> <br /> <br /> <span>Our portfolio demonstrates designers commitment to excellence
                    and client happiness. We had regularly completed successful projects across multiple industries, making us a reliable partner for
                    both startups and established businesses seeking digital transformation.</span><br /> <br /> <span>Choose Codeedex for a journey of success,
                    where quality knows no bounds and budgets are no barrier.</span></p>
            </div>
            <div className='image123'>
                <img src="https://i.postimg.cc/bNnFby7N/2150010125-2.png" alt="" />
                <div className='lead'>
                    <h1>Leading the charge for the digital entertainment revolution</h1>
                    <p>At Codeedex, we are dedicated to providing a seamless and unforgettable experience for our clients. With a focus on user-centric design and functionality, We ensures that every project is tailored to meet the unique needs of our clients and their audiences. From immersive user experiences to interactive streaming platforms, we specialize in bringing ideas to life in the digital realm.</p>
                    <h1>Providing simple answers to complex problems</h1>
                    <p>We specialize in providing simple answers to complex problems. With a team comprising experienced developers, passionate designers, and a track record of successful projects, we are committed to simplifying challenges and delivering exceptional results.</p>
                </div>
            </div>
            <div className='services p-5'>
                <h1>Services</h1>
                <p style={{ fontSize: "19px" }}>At Codeedex, we're dedicated to delivering results that exceed expectations. Partner with us and unlock the full potential of your online presence.</p>
                <div className='container12 p-5'>
                    <div className='div1'>
                        <img src="https://i.postimg.cc/PqRW10r1/iconoir-developer.png" alt="" />
                        <h4>Full Stack Development</h4>
                        <p>Experience the latest tech with our full stack dev services. Our skilled team crafts strong, flexible solutions for your needs, from web and mobile apps to custom software. We've got it all covered, tailored just for you.</p>
                    </div>
                    <div className='div2'>
                        <img src="https://i.postimg.cc/3N7Fwmxq/ion-server-outline-1.png" alt="" />
                        <h4>Hosting</h4>
                        <p>Let us handle the tech stuff. With Codeedex, your website or app is safe. Our hosting ensures top performance, security, and uptime, letting you focus on your business.</p>
                    </div>
                    <div className='div3'>
                        <img src="https://i.postimg.cc/rp1T429P/arcticons-websitemonitor.png" alt="" />
                        <h4>CMS Maintenance</h4>
                        <p>We help keep your website fresh and running smoothly with our CMS maintenance. Our team takes care of everything. we make sure your CMS is always safe and up-to-date.</p>
                    </div>
                    <div className='div4'>
                        <img src="https://i.postimg.cc/TwKZ98jx/carbon-application-web.png" alt="" />
                        <h4>UI/UX Design</h4>
                        <p>We create easy-to-use interfaces that attract users and boost sales. Whether you're starting fresh or updating, our designs will surpass what you expect.</p>
                    </div>
                    <div className='div5'>
                        <img src="https://i.postimg.cc/YS3NjjTD/arcticons-emoji-web.png" alt="" />
                        <h4>SEO</h4>
                        <p>Improve your online presence and reach your audience with our SEO services. Our experts use proven strategies to boost your site's search rankings and drive organic traffic.</p>
                    </div>
                    <div className='div6'>
                        <img src="https://i.postimg.cc/JzRvFH3P/icon-park-outline-market-analysis.png" alt="" />
                        <h4>Digital Marketing</h4>
                        <p>Expand your online presence and boost your brand with our digital marketing services. We handle social media and PPC ads to connect you with your audience.</p>
                    </div>
                </div>
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
            <Footer></Footer>
        </div>
    )
}

export default Aboutus