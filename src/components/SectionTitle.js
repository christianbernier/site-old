import React from "react";
import { css } from "@emotion/core";

export default ({ title, line }) => {
  return (
    <>
      <p
        css={css`
          font-size: 28px;
          font-weight: 700;
          margin-top: 50px;
        `}
      >
        {title}
      </p>
      <div
        css={css`
          width: 50px;
          height: 8px;
          background-color: var(--dark-green);
          margin-top: -24px;
          display: ${(line) ? "block" : "none"}
        `}
      />
    </>
  );
};
