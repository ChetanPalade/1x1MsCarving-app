import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../styles/hero-section.css';
import { Link } from "react-router-dom";


const Home = () => {
  return (
      <section>
        <div>              
            <h2 className="d-flex justify-content-center ">Welcome to MSCarving</h2>
          </div>
        <Container>
          <Row>
            <Col lg="5" md="10">
              <div className="hero_content">
                <h5 className="mb-3">From Resume to </h5>
                <h1 className="mb-4 hero_title">
                  <span>Interview</span> preparation 
                </h1>
                <p className="text-blue">Your Journey to knowledge starts here. Explore our services and resources designed to help you succeed.</p>
                <button className="cta-button d-flex align-items-center justify-content-center ">
                  <Link to="/BookingForm">
                    1 x 1
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="hero_img">
                <img src={"https://img.freepik.com/premium-photo/visual-compliance-officer-conducting-training-session-anticorruption-laws_1314467-21547.jpg?w=740"} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Home;