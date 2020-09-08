import React from "react";
import BodyParagraph from "../components/BodyParagraph.js";

export default ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map((t, i) => (
        <BodyParagraph 
          text={t}
          key={`body_paragraph_${i}`}
        />
      ))}
    </>
  );
};
