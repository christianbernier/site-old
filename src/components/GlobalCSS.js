import React from "react";
import {css, Global} from "@emotion/core";
import {Helmet} from "react-helmet-async";
import Favicon from "../../assets/icon.png";
import ShareImage from "../../assets/share_image.png";

export default () => {
  return(
    <>
      <Helmet>
        <title>Christian Bernier</title>
        <link rel="shortcut icon" href={Favicon}/>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Christian Bernier" />
        <meta property="og:title" content="Christian Bernier" />
        <meta property="og:description" content="Learn more about Christian Bernier and explore some of his projects." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={ShareImage}/>
        <meta property="description" content="Learn more about Christian Bernier and explore some of his projects."/>
      </Helmet>
      <Global
        styles={css`
          @import url('https://rsms.me/inter/inter.css');

          :root{
            --white-background: #D7F8FE;
            --font-navy: #02143C;
            --highlight-blue: #B0DAFF;
            --background-blue: #CBECFF;
            font-family: "Inter", Arial, Helvetica, sans-serif;
          }

          body{
            padding: 0;
            margin: 0;
            background-color: var(--white-background);
            min-height: 100vh;
            width: 100vw;
          }

          p, a{
            color: var(--font-navy)
          }

          .fare{
            font-size: 18px;
            font-weight: 450;
            margin-top: -5px;
          }

        `}
      />
    </>
  )
}