import React from "react";
import { Helmet } from "react-helmet";
import App from "../components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.scss";
import headData from "./../data/headData.json";
import Thumbnail from "./../images/Alec_Pagliarussi_Profile_picture.jpg";

export default () => {
  const { title, lang, description } = headData;

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/alecbp/",
    github: "https://github.com/AlecBp",
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={Thumbnail} />
        <html lang={lang} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={Thumbnail} />
        <meta property="og:url" content="https://alecpagliarussi.me" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={socialLinks} />
        <meta name="twitter:site" content={"@AlecPaglia"} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content={Thumbnail} />
      </Helmet>
      <App />
    </>
  );
};
