import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Title from "../Title/Title";
import ProjectImg from "../Image/ProjectImg";
import projectData from "./../../data/projectData.json";

const Projects = () => {
  const { projects } = projectData;

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
              modalInfoExperimental,
              useExperimental,
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
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        {info && <p>{info}</p>}
                        {info2 && <p className="mb-5">{info2}</p>}
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
                          href={url}
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
                          See more
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
                            <button className="projects-modal-close-modal" onClick={handleClose}>
                              &#x2715;
                            </button>
                            <div
                              className="project-modal-wrapper__text"
                              style={{ textAlign: "left" }}
                            >
                              <h3 className="project-modal-wrapper__text-title">{title}</h3>
                              <div>
                                {!useExperimental &&
                                  modalInfo.map((info, i) => (
                                    <p className="project-modal-wrapper__text-p" key={i}>
                                      {info}
                                    </p>
                                  ))}

                                {useExperimental &&
                                  modalInfoExperimental.map((item, i) => {
                                    if (item.type === "p")
                                      return (
                                        <p className="project-modal-wrapper__text-p" key={i}>
                                          {item.data}
                                        </p>
                                      );

                                    if (item.type === "h2")
                                      return (
                                        <p className="h1 mt-5 mb-3" key={i}>
                                          {item.data}
                                        </p>
                                      );

                                    if (item.type === "list")
                                      return (
                                        <div key={i}>
                                          <p className="mb-3 mt-5">{item.listTitle}</p>
                                          <ul className="mb-3">
                                            {item.data.map((listItem, j) => {
                                              return (
                                                <li style={{ fontSize: "1.5rem" }} key={j}>
                                                  {listItem}
                                                </li>
                                              );
                                            })}
                                          </ul>
                                        </div>
                                      );

                                    if (item.type === "image")
                                      return (
                                        <div key={i} className="project-modal-wrapper__modal-images-container">
                                          <Col key={id} xs={12}>
                                            <div className="project-modal-wrapper__image">
                                              <div className="mt-sm-4 mt-4 mb-4 pb-0 pt-sm-4 px-1">
                                                {item.caption && <p>{item.caption}</p>}
                                              </div>
                                              <div
                                                className={`thumbnail rounded ${
                                                  item.isSlimImage ? "slim" : ""
                                                }`}
                                              >
                                                <ProjectImg alt={item.alt} filename={item.img} />
                                              </div>
                                              {/* <div className="mb-sm-5 mb-5 pb-0 pb-sm-5 px-1">
                                                {item.caption && <p>{item.caption}</p>}
                                              </div> */}
                                            </div>
                                          </Col>
                                        </div>
                                      );
                                  })}
                                <div className="project-modal-wrapper__tech mt-5">
                                  <h4 className="project-modal-wrapper__tech-title">Tech stack:</h4>
                                  <div className="project-modal-wrapper__tech-container">
                                    <h4>{techStack.map((tech) => tech.name).join(" - ")}</h4>
                                  </div>
                                </div>
                              </div>
                              {!useExperimental && (
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
                                            <div className="mb-sm-5 mb-5 pb-0 pb-sm-5 px-1">
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
                              )}
                              <div className="d-flex mt-5">
                                <button
                                  style={{ fontSize: "1.3rem" }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="cta-btn cta-btn--hero mx-auto"
                                  onClick={handleClose}
                                >
                                  Back
                                </button>
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
                      {/* <a
                        href={url || "#!"}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      > */}
                      <div
                        onClick={() => {
                          if (enableSeeMore) {
                            handleShow();
                            setModalContentId(id);
                          }
                        }}
                        role="button"
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
                        {/* </a> */}
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
