import React from "react";
import { css } from "@emotion/core";

export default ({
  title,
  description,
  url,
  date,
  languages,
  openSourceUrl,
}) => {
  const linkUrl = url.indexOf("https://") === -1 ? `https://${url}` : url;

  return (
    <div
      css={css`
        height: auto;
        min-height: 300px;
        background-color: var(--highlight-blue);
        border-radius: 10px;
        margin: 20px 0;
        display: grid;
        grid-template-areas:
          "title title"
          "desc  links";
        grid-template-rows: 80px auto;
        grid-template-columns: 2fr 3fr;

        /* @media only screen and (min-width: 1700px) {
          margin: 20px calc(((100vw - 1700px) / 2) + 30px);
        } */

        @media only screen and (max-width: 500px) {
          grid-template-areas:
            "title"
            "desc"
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
      <p
        css={css`
          font-size: 22px;
          font-weight: 400;
          grid-area: desc;
          padding-left: 30px;
          padding-right: 30px;
        `}
      >
        {description}
      </p>
      <div
        css={css`
          grid-area: links;
          display: flex;
          flex-direction: column;
          text-align: right;
          padding-right: 30px;

          @media only screen and (max-width: 500px) {
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
            font-style: italic;
            margin: 0;
            margin-top: 22px;
          `}
        >
          {date}
        </p>
        <p
          css={css`
            font-size: 22px;
            font-weight: 400;
            margin: 0;
            margin-top: 8px;
          `}
        >
          Languages: {languages}
        </p>
        {url.length > 0 ? (
          <a
            css={css`
              font-size: 22px;
              font-weight: 400;
              margin-top: 8px;
            `}
            href={linkUrl}
          >
            {url}
          </a>
        ) : (
          <></>
        )}

        <a
          css={css`
            font-size: 22px;
            font-weight: 400;
            margin-top: 8px;
          `}
          href={openSourceUrl}
        >
          Source code
        </a>
      </div>
    </div>
  );
};
