import React from "react";
import {css} from "@emotion/core";

import LeftCurve from "../../assets/left_curve.png";
import CenterCurve from "../../assets/center_curve.png";
import RightCurve from "../../assets/right_curve.png";

export default () => {
  return(
    <div
      css={css`
        width: 100vw;
        overflow: hidden;
        height: 20vh;
        display: grid;
        grid-template-areas: "left center right";
        grid-template-rows: 20vh;
      `}
    >
      <img
        src={LeftCurve}
        css={css`
          grid-area: left;
          width: 100%;
          height: 100%;
        `}
      />
      <img
        src={CenterCurve}
        css={css`
          grid-area: center;
          width: 100%;
          height: 100%;
        `}
      />
      <img
        src={RightCurve}
        css={css`
          grid-area: right;
          width: 100%;
          height: 100%;
        `}
      />
    </div>
  )
}