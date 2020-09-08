import React from "react";
import {css} from "@emotion/core";

export default ({ titles, links }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {titles.map((t, i) => (
        <a
          css={css`
            font-size: 1.2rem;
            color: var(--font-navy);
            font-family: "Inter", sans-serif;
            font-weight: 400;
            margin-left: calc(5vw + 20px);
            margin-right: 5vw;
            margin-bottom: 15px;

            @media only screen and (min-width: 1700px) {
              padding: 0 calc((100vw - 1700px) / 2);
            }

            @media only screen and (min-width: 1700px) {
              margin-right: 30px;
              margin-left: 50px;
            }
          `}
          href={links[i]}
        >
          {t}
        </a>
      ))}
    </div>
  );
};
