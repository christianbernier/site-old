import React, { useState } from "react";
import { css } from "@emotion/core";
import Projects from "../../programming_projects.json";

import PortfolioItem from "./PortfolioItem";

export default () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {Projects.map((p, i) => {
        if (i < 5 || showMore) {
          return (
            <PortfolioItem
              title={p.title}
              description={p.description}
              date={p.dateActive}
              linkTexts={p.linkTexts}
              linkURLs={p.linkURLs}
            />
          );
        } else {
          return;
        }
      })}
      <p
        css={css`
          font-size: 18px;
          text-decoration: underline;
          cursor: pointer;
        `}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show fewer projects" : "Show more projects"}
      </p>
    </div>
  );
};
