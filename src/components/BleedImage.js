import React from "react";
import { css } from "@emotion/core";
import IndexCoverImage from "../../assets/cover.jpg";
import IconLarge from "../../assets/icon_large.png";

export default ({ height, imgsrc, header, subheader, byline }) => {
  let source = null;

  switch (imgsrc) {
    case "index_cover":
      source = IndexCoverImage;
      break;
  }

  return (
    <div
      css={css`
        width: 100vw;
        height: ${height};
        background: linear-gradient(to top, #000000c0, transparent),
          url(${source}) no-repeat center;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media only screen and (min-width: 1700px) {
          padding: 0 calc((100vw - 1700px) / 2);
          width: 1700px;
        }
      `}
    >
      <div
        css={css`
          margin-left: 5%;
          margin-top: 80px;

          display: flex;
          flex-direction: row;
          justify-content: space-between;

          @media only screen and (max-width: 500px) {
            margin-left: 0;
          }
        `}
      >
        <div>
          <p
            css={css`
              font-size: 4rem;
              color: var(--font-navy);
              font-family: "Inter", sans-serif;
              font-weight: 800;
              margin-top: 0;
              margin-bottom: 0;

              @media only screen and (max-width: 500px) {
                max-width: calc(100vw - 60px);
                margin-left: 30px;
                margin-right: 30px;
              }
            `}
          >
            {header}
          </p>
          <p
            css={css`
              font-size: 1.8rem;
              color: var(--font-navy);
              font-family: "Inter", sans-serif;
              font-weight: 600;
              margin-top: 5px;

              @media only screen and (max-width: 500px) {
                max-width: calc(100vw - 60px);
                margin-left: 30px;
                margin-right: 30px;
              }
            `}
          >
            {subheader}
          </p>
        </div>
        <img
          src={IconLarge}
          css={css`
            width: 80px;
            height: 80px;
            margin-right: 3vw;
            margin-top: calc(-80px + 3vw);

            @media only screen and (max-width: 500px) {
              display: none;
            }
          `}
        />
      </div>
      <p
        css={css`
          font-size: 1.2rem;
          text-align: left;
          color: var(--white-background);
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-style: italic;
          margin-left: 5%;

          @media only screen and (max-width: 500px) {
            max-width: calc(100vw - 60px);
            margin-left: 30px;
            margin-right: 30px;
          }
        `}
      >
        {byline}
      </p>
    </div>
  );
};
