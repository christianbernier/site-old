import React from "react";
import { css } from "@emotion/core";

export default ({ text, line }) => {
  return (
    <div
      css={css`
        @media only screen and (min-width: 1700px) {
          padding: 0 calc((100vw - 1700px) / 2);
        }
      `}
    >
      <p
        css={css`
          font-size: 2rem;
          color: var(--font-navy);
          font-family: "Playfair Display", sans-serif;
          font-weight: 800;
          margin-left: 5vw;
          margin-top: 20px;
          margin-bottom: 15px;

          @media only screen and (min-width: 1700px) {
            margin-right: 30px;
            margin-left: 30px;
          }
        `}
      >
        {text}
      </p>
      {line ? (
        <div
          css={css`
            background-color: var(--font-navy);
            width: 40px;
            height: 5px;
            margin-left: 5vw;
            margin-bottom: 15px;
            margin-top: -5px;

            @media only screen and (min-width: 1700px) {
              margin-right: 30px;
              margin-left: 30px;
            }
          `}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
