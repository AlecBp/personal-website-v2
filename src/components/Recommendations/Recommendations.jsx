import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import recommendationData from "./../../data/recommendationData.json";

const Recommendations = () => {
  const { recommendations } = recommendationData;

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
    <section id="recommendations">
      <Container>
        <div className="recommendations-wrapper">
          <Title title="References & Recommendations" />
          {recommendations.map((recommendation) => {
            const { name, quotes, id, more, address } = recommendation;

            return (
              <div className="recommendations-wrapper__text" key={id}>
                <div className="mb-5">
                  {quotes.map((q, j) => {
                    return (
                      <div key={j} className="my-3 d-flex justify-content-center align-items-center">
                        <div className="recommendations-wrapper__text-quote-mark">
                          <div className="start">&#8220;</div>
                        </div>
                        <p className="recommendations-wrapper__text-quote">{q}</p>
                        <div className="recommendations-wrapper__text-quote-mark">
                          <div className="end">&#8221;</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div className="recommendations-wrapper__text-info">
                    <div>{name}</div>
                    <div>{more}</div>
                    <div>{address}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Recommendations;
