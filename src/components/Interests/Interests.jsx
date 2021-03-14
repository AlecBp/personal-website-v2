import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import interestData from "./../../data/interestData.json";

const Interests = () => {
  const { interests } = interestData;

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
