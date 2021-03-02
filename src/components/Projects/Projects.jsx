import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col, Modal } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";
import ProjectImg from "../Image/ProjectImg";

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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

  const [show, setShow] = useState(false);
  const [modalContentId, setModalContentId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const {
              title,
              info,
              info2,
              url,
              repo,
              img,
              id,
              techStack,
              enableSeeMore,
              modalInfo,
              modalImages,
            } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || "Project Title"}</h3>
                      <div>
                        <p>{info || ""}</p>
                        <p className="mb-5">{info2 || ""}</p>
                        <div className="project-wrapper__tech">
                          <h4 className="project-wrapper__tech-title">Tech stack:</h4>
                          <div className="project-wrapper__tech-container">
                            {/* {techStack.map((tech) => (
                              <div className="project-wrapper__tech-item" key={tech.id}>
                                {tech.name}
                              </div>
                            ))} */}
                            <h4>{techStack.map((tech) => tech.name).join(" - ")}</h4>
                          </div>
                        </div>
                      </div>
                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || "#!"}
                        >
                          See Live
                        </a>
                      )}

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}

                      {enableSeeMore && (
                        <button
                          onClick={() => {
                            handleShow();
                            setModalContentId(id);
                          }}
                          style={{ fontSize: "1.6rem" }}
                          className="cta-btn text-color-main border-0"
                        >
                          See more...
                        </button>
                      )}

                      {enableSeeMore && (
                        <Modal
                          centered
                          size="xl"
                          show={show && modalContentId === id}
                          onHide={handleClose}
                        >
                          <div className="projects-modal">
                            <div
                              className="project-modal-wrapper__text"
                              style={{ textAlign: "left" }}
                            >
                              <h3 className="project-modal-wrapper__text-title">
                                {title || "Project Title"}
                              </h3>
                              <div>
                                {modalInfo.map((info, i) => (
                                  <p className="project-modal-wrapper__text-p" key={i}>
                                    {info}
                                  </p>
                                ))}

                                <div className="project-modal-wrapper__tech mt-5">
                                  <h4 className="project-modal-wrapper__tech-title">Tech stack:</h4>
                                  <div className="project-modal-wrapper__tech-container">
                                    <h4>{techStack.map((tech) => tech.name).join(" - ")}</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="project-modal-wrapper__modal-images-container">
                                <h3 className="project-modal-wrapper__modal-images-container-title">
                                  Images:
                                </h3>
                                <Row>
                                  {modalImages.map((item) => {
                                    return (
                                      <Col key={id} xs={12}>
                                        <div className="project-modal-wrapper__image">
                                          <div className="thumbnail rounded">
                                            <ProjectImg alt={item.alt} filename={item.img} />
                                          </div>
                                          <div className="py-5 px-1">
                                            {item.caption && <p>{item.caption}</p>}
                                          </div>
                                        </div>
                                      </Col>
                                    );
                                  })}
                                  {/* <Col xs={12}>
                                    <div className="project-modal-wrapper__image">
                                      <div className="thumbnail rounded">
                                        <ProjectImg alt={title} filename={img} />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col xs={12}>
                                    <div className="project-modal-wrapper__image">
                                      <div className="thumbnail rounded">
                                        <ProjectImg alt={title} filename={img} />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col xs={12}>
                                    <div className="project-modal-wrapper__image">
                                      <div className="thumbnail rounded">
                                        <ProjectImg alt={title} filename={img} />
                                      </div>
                                    </div>
                                  </Col> */}
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Modal>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || "#!"}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: "cubic-bezier(.03,.98,.52,.99)",
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
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
