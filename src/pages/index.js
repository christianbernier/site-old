import React, { useState } from "react";
import { css } from "@emotion/core";

import GlobalCSS from "../components/GlobalCSS";
import ProfilePicture from "../../assets/profile.jpg";
import Curve from "../components/Curve";
import SectionTitle from "../components/SectionTitle";
import BodyText from "../components/BodyText";
import ProgrammingPortfolio from "../components/ProgrammingPortfolio";
import MediaPortfolio from "../components/MediaPortfolio";

export default () => {
  return (
    <>
      <Curve />

      <GlobalCSS />
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          display: grid;
          grid-template-areas:
            "content"
            "footer";
          grid-template-rows: auto auto;
          grid-template-columns: 100vw;
        `}
      >
        <div
          css={css`
            grid-area: content;
            padding: 0 40px;
            margin: 0 auto;
            margin-bottom: 50px;
            width: 80vw;
            max-width: 1300px;
          `}
        >
          <div
            css={css`
              display: grid;
              margin-top: -15vh;
              grid-template-areas:
                ". pfp"
                "title pfp"
                "subtitle subtitle";
              grid-template-columns: 85% 15%;
              grid-template-rows: auto auto auto;

              @media only screen and (max-width: 1200px) {
                grid-template-areas:
                  "title"
                  "subtitle";

                grid-template-rows: auto auto;
                grid-template-columns: auto;
              }
            `}
          >
            <p
              css={css`
                font-size: 42px;
                font-weight: 900;
                margin-top: 0;
                grid-area: title;

                @media only screen and (max-width: 1310px) {
                  margin-top: 15vh;
                }
              `}
            >
              Christian Bernier
            </p>
            <p
              css={css`
                margin-top: -30px;
                font-style: italic;
                font-size: 22px;
                font-weight: 400;
                grid-area: subtitle;
                margin-bottom: 0;
              `}
            >
              High school student and programmer in Greater Boston,
              Massachusetts
            </p>
            <img
              src={ProfilePicture}
              css={css`
                grid-area: pfp;
                width: 100%;
                border-radius: 100%;
                background-color: var(--light-green);
                padding: 20px;

                @media only screen and (max-width: 1310px) {
                  display: none;
                }
              `}
            />
          </div>
          <SectionTitle title="About" line={true} />
          <BodyText text="My name is Christian Bernier. I’m an 18-year old senior in high school in the Greater Boston region in Massachusetts. I enjoy programming and photography/videography in my free time, so this is a portfolio website I designed and created to show off some of my work." />
          <BodyText text="This fall I'm beginning my undergraduate degree as a computer science/physics major at Northeastern University in Boston, MA. In anticipation for studying the interdiciplinary CS/physics field, I have begun creating physics visualizations using my knowledge of computer science and physics. Check them out below." />
          <BodyText text="I spend much of my time volunteering at my local church, Grace Chapel, operating AV tech and leading a group of about 25 middle school and high school students. In response to the COVID-19 pandemic, I’ve been assisting in their video production by operating camera equipment and editing parts of the service in Final Cut Pro X." />
          <BodyText text="Additionally, I enjoy programming in my free time. I am currently learning SwiftUI and am expanding my skills in JavaScript, specifically NodeJS, React, Gatsby, and Expo. You can find some of my programming projects below, including source code." />
          <SectionTitle title="Contact" line={true} />
          <BodyText text="Please feel free to contact me with any questions or comments by emailing [christian@cbernier.com](mailto:christian@cbernier.com)." />
          <BodyText text="Also, please check out my [Twitter](https://twitter.com/cberns__), [LinkedIn](https://linkedin.com/in/christian-bernier-965885167/), and [GitHub](https://github.com/christianbernier) pages." />
          <SectionTitle title="Programming Portfolio" line={true} />
          <BodyText text="Below are some of the programs I've created over the years. All programs listed below have source code on GitHub. Some include links to view the live project." />
          <ProgrammingPortfolio />
          <SectionTitle title="Media Portfolio" line={true} />
          <BodyText text="Below are some of the videos and photos I've either taken, helped record, or edited. All the content below has links to view the final product." />
          <MediaPortfolio />
        </div>
        <div
          css={css`
            grid-area: footer;
            background-color: var(--light-green);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90vw;
            margin: 0 auto;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          `}
        >
          <p
            css={css`
              font-size: 15px;
              color: var(--dark-green);
              width: 80%;
              text-align: center;
            `}
          >
            Christian Bernier's Personal Portfolio Website © 2020 to Christian
            Bernier.
          </p>
        </div>
      </div>
    </>
  );
};
