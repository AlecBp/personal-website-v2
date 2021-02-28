import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";

const Projects = () => {
  const { experience } = useContext(PortfolioContext);

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

  console.log(isMobile);

  return (
    <section id="experience">
      <Container>
        <div className="experience-wrapper">
          <Title title="Experience" />
          {experience.map((project, i) => {
            const {
              id,
              title,
              type,
              location,
              from,
              to,
              info,
              info2,
              info3,
              bullets,
              company,
            } = project;

            return (
              <Row key={id} className="experience-wrapper__box">
                <Col
                  lg={6}
                  sm={12}
                  className="w-100"
                  // className={`d-flex align-items-center px-0 ${
                  //   i % 2 === 1 ? "justify-content-start" : "justify-content-end"
                  // }`}
                >
                  <Fade
                    left={isDesktop && i % 2 === 1}
                    right={isDesktop && i % 2 === 0}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div
                      className={`experience-wrapper__text ${
                        i % 2 === 1
                          ? "experience-wrapper__content_left"
                          : "experience-wrapper__content_right"
                      }`}
                      // style={{ textAlign: isMobile ? "left" : i % 2 === 1 ? "left" : "right" }}
                    >
                      <h2 className="experience-wrapper__text-title">{title}</h2>
                      <h2>{company}</h2>
                      <h3>
                        {type} - {location}
                      </h3>
                      <h4>
                        {from} - {to}
                      </h4>
                      <div>
                        {info && <p>{info}</p>}
                        {info2 && <p>{info2}</p>}
                        {info3 && <p>{info3}</p>}
                      </div>
                    </div>
                  </Fade>
                </Col>

                <Col
                  lg={{ span: 6, order: i % 2 === 1 ? "first" : "last" }}
                  sm={{ span: 12, order: "last" }}
                  className="px-0"
                >
                  <Fade
                    right={isDesktop && i % 2 === 1}
                    left={isDesktop && i % 2 === 0}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div
                      className={`experience-wrapper__text ${
                        i % 2 === 1
                          ? "experience-wrapper__border_right"
                          : "experience-wrapper__border_left"
                      }`}
                    >
                      <div>
                        {bullets.map((item, i) => {
                          return (
                            <p key={i}>
                              <span style={{ fontWeight: "bolder", fontSize: "1.25em" }}>
                                &#8226;
                              </span>{" "}
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
