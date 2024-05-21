import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import web from '../assets/website.mp4';
import './Home.css'; // Import CSS file for styling
import Footer from '../components/Footer';

function Home() {

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
        <div className='main'>
             <div className='header-container'>
        <Header />
    </div>
            <div className='video-background'>
                <video autoPlay muted loop className='video'>
                    <source src={web} type='video/mp4' />
                </video>
                <div className='content'>
                    <h1 className='p-3 text-center' style={{ fontSize: "50px", color: "white" }}><b>Empowering Tomorrow's <span style={{ marginLeft: "-31px" }}>Technological Triumphs</span></b></h1>
                    <p className='' style={{ fontSize: "18px", marginLeft: "65px", color: "white" }}>Explore the Codeedex Revolution</p>
                    <button style={{ marginLeft: "65px", backgroundColor: "transparent", borderColor: "white" }} className='btn btn-primary'>Request a Callback</button>
                </div>
            </div>
            <div className='kop p-5'>
                <div>
                    <h2 className='text-white'><b>Leading the charge for the digital entertainment revolution</b></h2>
                    <p className='text-white'>At Codeedex, we are dedicated to providing a seamless and unforgettable
                        experience for our clients. With a focus on user-centric design and functionality,
                        We ensures that every project is tailored to meet the unique needs of our clients
                        and their audiences. From immersive user experiences to interactive streaming
                        platforms, we specialize in bringing ideas to life in the digital realm.</p>


                    <h2 className='text-white'><b>Providing simple answers to complex problems</b></h2>
                    <p className='text-white'>We specialize in providing simple answers to complex problems. With a team comprising experienced developers, passionate designers, and a track record of successful projects, we are committed to simplifying challenges and delivering exceptional results.
                    </p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/sX0tZrQ7/image-1.png" alt="" />
                </div>
            </div>
            <div className='whycode p-5'>
                <h1>Why Codeedex?</h1>
                <div className="whycode-content mt-5">
                    <div className="image-container ">
                        <img src="https://i.postimg.cc/VNJTQhHN/Rectangle-113.png" alt="" />
                    </div>
                    <div className="text-container">
                        <p className='why'>
                            Codeedex is a leading provider of high-quality, affordable, and convenient websites/Application for businesses in the digital age.
                            With a focus on affordability and EMI options, we provide a one-of-a-kind solution for businesses seeking to prosper in the digital
                            age. We have experienced developers, skilled in delivering excellence, meticulously craft websites that not only meet but exceed client
                            expectations. Our experience guarantees that each website is visually appealing and functionally better, resulting in increased user
                            engagement and business success. <br />Our portfolio demonstrates designers commitment to excellence and client happiness. We had regularly
                            completed successful projects across multiple industries, making us a reliable partner for both startups and established businesses
                            seeking digital transformation. <br />Choose Codeedex for a journey of success, where quality knows no bounds and budgets are no barrier.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='serv'>
                <h1 className='text-white'><b>Our Services</b></h1>
                <div class="wrapperr">
                    <div class="containercards">
                        <input type="radio" name="slide" id="c1" checked />
                        <label for="c1" class="cards">
                            <div class="rows">
                                <div class="icons">1</div>
                                <div class="descriptions">
                                    <h4>Full Stack Development</h4>
                                    {/* <p>Experience the latest tech with our full stack dev services. Our skilled team crafts strong, flexible solutions for your needs, from web and mobile apps to custom software. We've got it all covered, tailored just for you.</p> */}
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c2" />
                        <label for="c2" class="cards">
                            <div class="rows">
                                <div class="icons">2</div>
                                <div class="descriptions">
                                    <h4>Hosting</h4>
                                    {/* <p>Let us handle the tech stuff. With Codeedex, your website or app is safe. Our hosting ensures top performance, security, and uptime, letting you focus on your business.</p> */}
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c3" />
                        <label for="c3" class="cards">
                            <div class="rows">
                                <div class="icons">3</div>
                                <div class="descriptions">
                                    <h4>CMS Maintenance</h4>
                                    {/* <p>We help keep your website fresh and running smoothly with our CMS maintenance. Our team takes care of everything. we make sure your CMS is always safe and up-to-date.</p> */}
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c4" />
                        <label for="c4" class="cards">
                            <div class="rows">
                                <div class="icons">4</div>
                                <div class="descriptions">
                                    <h4>UI/UX Design</h4>
                                    {/* <p>We create easy-to-use interfaces that attract users and boost sales. Whether you're starting fresh or updating, our designs will surpass what you expect.</p> */}
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c5" />
                        <label for="c5" class="cards">
                            <div class="rows">
                                <div class="icons">5</div>
                                <div class="descriptions">
                                    <h4>SEO</h4>
                                    {/* <p>Improve your online presence and reach your audience with our SEO services. Our experts use proven strategies to boost your site's search rankings and drive organic traffic,</p> */}
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c6" />
                        <label for="c6" class="cards">
                            <div class="rows">
                                <div class="icons">6</div>
                                <div class="descriptions">
                                    <h4 >Digital Marketing</h4>
                                    {/* <p>Expand your online presence and boost your brand with our digital marketing services. We handle social media and PPC ads to connect you with your audience.</p> */}
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className='client p-5'>
                <h1>Client says</h1>
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
            <div className='team p-5'>
                <h1>Our Team</h1>
                <div className='circle-container p-3'>
                    <div className='circle'>
                        <img className='circle-image' src="https://i.postimg.cc/sXSgHGN8/Screenshot-2024-05-07-155449.png" alt="" />
                        <h4 className='text-center mt-3'>Ziyad Kunheen</h4>
                        <p className='text-center'>Founder Of Codeedex</p>
                    </div>
                    <div className='circle'>
                        <img className='circle-image' src="https://i.postimg.cc/bNLk94bn/Screenshot-2024-05-07-155528.png" alt="" />
                        <h4 className='text-center mt-3'>Muhammed Iqbal K</h4>
                        <p className='text-center'>Founder Of Codeedex</p>
                    </div>
                    <div className='circle'>
                        <img className='circle-image' src="https://i.postimg.cc/sXSgHGN8/Screenshot-2024-05-07-155449.png" alt="" />
                        <h4 className='text-center mt-3'>Ziyad Kunheen</h4>
                        <p className='text-center'>Founder Of Codeedex</p>
                    </div>
                    <div className='circle'>
                        <img className='circle-image' src="https://i.postimg.cc/bNLk94bn/Screenshot-2024-05-07-155528.png" alt="" />
                        <h4 className='text-center mt-3'>Muhammed Iqbal K</h4>
                        <p className='text-center'>Founder Of Codeedex</p>
                    </div>
                    <div className='circle'>
                        <img className='circle-image' src="https://i.postimg.cc/sXSgHGN8/Screenshot-2024-05-07-155449.png" alt="" />
                        <h4 className='text-center mt-3'>Ziyad Kunheen</h4>
                        <p className='text-center'>Founder Of Codeedex</p>
                    </div>
                    <div className='circle'>
                        <img className='circle-image' src="https://i.postimg.cc/bNLk94bn/Screenshot-2024-05-07-155528.png" alt="" />
                        <h4 className='text-center mt-3'>Muhammed Iqbal K</h4>
                        <p className='text-center'>Founder Of Codeedex</p>
                    </div>
                    <div className='circle'>
                        <img className='circle-image' src="https://i.postimg.cc/sXSgHGN8/Screenshot-2024-05-07-155449.png" alt="" />
                        <h4 className='text-center mt-3'>Ziyad Kunheen</h4>
                        <p className='text-center'>Founder Of Codeedex</p>
                    </div>
                    <div className='circle'>
                        <img className='circle-image' src="https://i.postimg.cc/bNLk94bn/Screenshot-2024-05-07-155528.png" alt="" />
                        <h4 className='text-center mt-3'>Muhammed Iqbal K</h4>
                        <p className='text-center'>Founder Of Codeedex</p>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </div>
    );
}
export default Home;
