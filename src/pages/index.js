import React from "react";
import { Helmet } from "react-helmet";
import App from "../components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.scss";
import headData from "./../data/headData.json";

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </>
  );
};
