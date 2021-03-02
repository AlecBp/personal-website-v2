import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";
import ProjectImg from "../Image/ProjectImg";

const Interests = () => {
  const { interests } = useContext(PortfolioContext);

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
    <section id="interests">
      <Container>
        <div className="interests-wrapper">
          <Title title="Other areas of interest" />
          {interests.map((interest) => {
            const { main, more, id } = interest;

            return (
              <div className="interests-wrapper__text" key={id}>
                <h3 className="interests-wrapper__text-title">{main}</h3>
                <h4>{more}</h4>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Interests;
