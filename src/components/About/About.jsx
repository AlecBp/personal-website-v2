import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import AboutImg from "../Image/AboutImg";
import aboutData from "./../../data/aboutData.json";

const About = () => {
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume, coverLetter } = aboutData;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
                <div className="d-flex flex-sm-col flex-md-row justify-content-center mt-5">
                  {coverLetter && (
                    <span className="d-flex mr-5">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={coverLetter}
                      >
                        Get my Cover Letter
                      </a>
                    </span>
                  )}
                  {resume && (
                    <span className="d-flex">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={resume}
                      >
                        Get my Resume
                      </a>
                    </span>
                  )}
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
