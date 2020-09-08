import React from "react";
import { css } from "@emotion/core";

export default ({ title, description, embed, date }) => {
  return (
    <div
      css={css`
        height: auto;
        min-height: 300px;
        border: 3px solid var(--font-navy);
        background-color: var(--white-background);
        border-radius: 10px;
        margin: 20px 0;
        display: grid;
        grid-template-areas:
          "title title"
          "media links";
        grid-template-rows: 80px auto;
        grid-template-columns: 2fr 3fr;

        @media only screen and (max-width: 800px) {
          grid-template-areas:
            "title"
            "media"
            "links";
          grid-template-rows: auto auto auto;
          grid-template-columns: 100%;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          height: auto;
          background-color: var(--mid-orange);
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          padding-left: 10px;
          display: flex;
          align-items: flex-end;
          margin-top: 20px;
          padding-right: 30px;

          grid-area: title;
        `}
      >
        <p
          css={css`
            padding-left: 20px;
            padding-right: 20px;
            font-size: 42px;
            font-weight: 800;
            margin: 0;
          `}
        >
          {title}
        </p>
      </div>
      <div
        css={css`
          grid-area: links;
          display: flex;
          flex-direction: column;
          text-align: right;
          padding-right: 30px;

          @media only screen and (max-width: 800px) {
            margin-bottom: 30px;
            text-align: left;
            padding-left: 30px;
          }
        `}
      >
        <p
          css={css`
            font-size: 22px;
            font-weight: 400;
            margin: 0;
            margin-top: 22px;
          `}
        >
          {description}
        </p>
        <p
          css={css`
            font-size: 22px;
            font-weight: 400;
            margin: 0;
            margin-top: 20px;
            font-style: italic;
          `}
        >
          {date}
        </p>
      </div>
      <div
        css={css`
          grid-area: media;
          margin-left: 30px;
          margin-right: 30px;
          margin-top: 22px;
          margin-bottom: 22px;
        `}
      >
        {embed}
      </div>
    </div>
  );
};
