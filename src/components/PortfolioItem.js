import React from "react";
import { css } from "@emotion/core";
import LinkGlyph from "../../assets/link_glyph.png";

export default ({ title, description, date, linkTexts, linkURLs }) => {
  return (
    <div
      css={css`
        width: calc(100% - 40px);
        min-height: 100px;
        margin: 0 auto;
        margin-top: 40px;
        padding: 20px;
        background-color: var(--light-green);
        border-radius: 10px;
        display: grid;
        grid-template-areas:
          "title date"
          "desc desc"
          "link link";
        grid-template-rows: auto auto auto;
        grid-template-columns: 2fr 1fr;
        @media only screen and (max-width: 1310px) {
          grid-template-areas:
            "title"
            "date"
            "desc"
            "link";
          grid-template-rows: auto auto auto auto;
          grid-template-columns: auto;
        }
      `}
    >
      <p
        css={css`
          grid-area: title;
          font-size: 26px;
          line-height: 40px;
          font-weight: 700;
          margin: 0;
        `}
      >
        {title}
      </p>
      <p
        css={css`
          grid-area: date;
          font-size: 18px;
          line-height: 40px;
          font-weight: 400;
          margin-top: 0;
          text-align: right;
          font-style: italic;

          @media only screen and (max-width: 1310px) {
            text-align: left;
          }
        `}
      >
        {date}
      </p>
      <p
        css={css`
          grid-area: desc;
          font-size: 20px;
          line-height: 30px;
          font-weight: 400;
          margin-top: 0;
        `}
      >
        {description}
      </p>
      <div
        css={css`
          grid-area: link;
        `}
      >
        {linkTexts.map((lt, i) => {
          return (
            <div
              css={css`
                margin-bottom: 10px;
              `}
            >
              <img
                src={LinkGlyph}
                css={css`
                  width: 20px;
                  margin-right: 10px;
                `}
              />
              <a
                href={linkURLs[i]}
                css={css`
                  font-size: 18px;
                `}
              >
                {lt}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
