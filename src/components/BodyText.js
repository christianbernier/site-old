import React, {useEffect, useState} from "react";
import { css } from "@emotion/core";

export default ({ text }) => {

  const[textSections, setTextSections] = useState([]);
  const[linkTexts, setLinkTexts] = useState([]);
  const[linkURLs, setLinkURLs] = useState([]);

  useEffect(() => {
    let ts = [], lt = [], lu = []; //text sections, link texts, link URLs
    let currentText = text;

    while(currentText.length > 0){
      const nextSquareBracket = currentText.indexOf("[");

      if(nextSquareBracket === 0){
        const closingSquareBracket = currentText.indexOf("]");
        lt.push(currentText.substr(1, closingSquareBracket - 1));
        const openingParenthesis = currentText.indexOf("(");
        const closingParenthesis = currentText.indexOf(")");
        lu.push(currentText.substr(openingParenthesis + 1, closingParenthesis - openingParenthesis - 1));
        currentText = currentText.substr(closingParenthesis + 1);
      } else if(nextSquareBracket === -1){
        ts.push(currentText);
        currentText = "";
      } else{
        ts.push(currentText.substr(0, nextSquareBracket));
        currentText = currentText.substr(nextSquareBracket);
      }
    }

    setTextSections(ts);
    setLinkTexts(lt);
    setLinkURLs(lu);

  }, []);

  return (
    <p
      css={css`
        font-size: 22px;
        font-weight: 400;
        line-height: 35px;
        margin-top: 15px;
      `}
    >
      {textSections[0]}
      {linkTexts.map((lt, i) => {
        return(
          <>
            <a
              href={linkURLs[i]}
            >
              {lt}
            </a>
            {textSections[i + 1]}
          </>
        )
      })}
    </p>
  );
};
