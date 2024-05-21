import React from 'react'
import { TextField } from '@mui/material'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Contact.css'
import HeadNav from '../components/HeadNav';
import Footer from '../components/Footer';




function Contactus() {
    return (

       <div>
        <HeadNav></HeadNav>
            <div  style={{ backgroundColor: "black", height: "120vh" }}>
                <div>
                    <h1 className='text-center text-white p-5'><b>CONTACT US</b></h1>
                    <Container>
                        <h2 style={{ color: "white" }} className='mt-5'><b>Get in Touch With Us</b></h2>
                        <Row>
                            <Col md={6}>
                                <TextField className='mt-5'
                                id="standard-basic"
                                label="Name :"
                                variant="standard"
                                InputLabelProps={{ style: { color: "white" } }}
                                placeholder="Name"
                                inputProps={{ style: { color: "white" } }}
                                style={{ width: "80%" }}
                            />
                           
                            </Col>
                            <Col md={6}><TextField className='mt-5'
                                id="standard-basic"
                                label="Email ID :"
                                variant="standard"
                                InputLabelProps={{ style: { color: "white" } }}
                                placeholder="Email ID"
                                inputProps={{ style: { color: "white" } }}
                                style={{ width: "80%" }}
                            /></Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col md={6}><TextField className='mt-5'
                                id="standard-basic"
                                label="Message :"
                                variant="standard"
                                InputLabelProps={{ style: { color: "white" } }}
                                placeholder="Message"
                                inputProps={{ style: { color: "white" } }}
                                style={{ width: "80%" }}
                            /></Col>
                            <Col md={6}><TextField className='mt-5'
                                id="standard-basic"
                                label="Phone Number :"
                                variant="standard"
                                InputLabelProps={{ style: { color: "white" } }}
                                placeholder="Phone Number"
                                inputProps={{ style: { color: "white" } }}
                                style={{ width: "80%" }}
                            /></Col>
                        </Row>
                        <Row>
                            <Col md={9}></Col>
                            <Col md={1}></Col>
                            <Col md={2}>
                                {/* <Button className='mt-5' variant="contained" style={{ backgroundColor: "white", padding: "10px 30px", fontWeight: "500" }}> Submit</Button> */}
                                <button className='button1' >Submit</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer></Footer>
       </div>
    )
}
export default Contactus