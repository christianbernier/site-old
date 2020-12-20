import React from "react";
import { css, Global } from "@emotion/core";
import { Helmet } from "react-helmet-async";

import Favicon from "../../assets/logo.png";
import ShareImage from "../../assets/shareimage.png";

export default () => {
  return (
    <>
      <Helmet>
        <title>Christian Bernier</title>
        <link rel="shortcut icon" href={Favicon} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Christian Bernier" />
        <meta property="og:title" content="Christian Bernier" />
        <meta
          property="og:description"
          content="Learn more about Christian Bernier's programming and media projects."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={ShareImage} />
        <meta
          property="description"
          content="Learn more about Christian Bernier's programming and media projects."
        />
      </Helmet>
      <Global
        styles={css`
          @import url("https://rsms.me/inter/inter.css");

          :root {
            --dark-green: #064e3b;
            --light-green: #a7f3d0;
            --white-background: #f9fafb;
            font-family: "Inter", Arial, Helvetica, sans-serif;
          }

          img {
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
          }

          body {
            padding: 0;
            margin: 0;
            background-color: var(--white-background);
          }

          p {
            color: var(--dark-green);
          }

          a {
            color: var(--dark-green);
          }
        `}
      />
    </>
  );
};
