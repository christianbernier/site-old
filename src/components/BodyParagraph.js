import React from "react";
import { css } from "@emotion/core";

export default ({ text }) => {
  return (
    <p
      css={css`
        font-size: 1.2rem;
        color: var(--font-navy);
        font-family: "Inter", sans-serif;
        font-weight: 400;
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 15px;

        @media only screen and (min-width: 1700px) {
          padding: 0 calc((100vw - 1700px) / 2);
        }

        @media only screen and (min-width: 1700px) {
          margin-right: 30px;
          margin-left: 30px;
        }
      `}
    >
      {text}
    </p>
  );
};
