import React from "react";
import { css } from "@emotion/core";

export default () => {
  return (
    <div
      css={css`
        background-color: var(--background-blue);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90vw;
        margin: 0 auto;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
      `}
    >
      <p
        css={css`
          font-size: 15px;
          color: var(--font-navy);
          width: 80%;
          text-align: center;
        `}
      >
        Personal portfolio site (cbernier.com) v.1.0
        © 2020 to Christian Bernier. All rights reserved.
      </p>
    </div>
  );
};
