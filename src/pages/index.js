import React from "react";
import { css } from "@emotion/core";
import GlobalCSS from "../components/GlobalCSS";
import ProjectTile from "../components/ProjectTile";
import BleedImage from "../components/BleedImage";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import SocialLinks from "../components/SocialLinks";
import Gap from "../components/Gap";
import Footer from "../components/Footer";
import Projects from "../../projects.json";
import MediaTile from "../components/MediaTile";

export default () => {
  return (
    <>
      <GlobalCSS />
      <BleedImage
        imgsrc="index_cover"
        header="Christian Bernier"
        subheader="Greater Boston, Massachusetts"
        byline="Charles River, Boston, MA"
        height="1000px"
      />
      <Gap height="50px" />
      <BodyHeader text="About" line={true} />
      <BodyText
        paragraphs={[
          "My name is Christian Bernier and I am currently a senior in high school in Massachusetts. In my free time I love to program, experiment with photography/videography, and learn as much as possible about technology.",
          "I spend much of my time volunteering at my local church, Grace Chapel, operating AV tech and leading a group of about 25 middle school and high school students. In response to the COVID-19 pandemic, I’ve been assisting in their video production by operating camera equipment and editing parts of the service in Final Cut Pro X.",
          "Additionally, I enjoy programming in my free time. I am currently learning SwiftUI and am expanding my skills in JavaScript, specifically NodeJS, React, Gatsby, and Expo. You can find some of my programming projects below, including source code.",
          "Thank you for visiting my portfolio and please let me know if you have any questions by emailing me at christian@cbernier.com.",
        ]}
      />
      <Gap height="30px" />
      <BodyHeader text="Social links" line={true} />
      <BodyText
        paragraphs={[
          "You can find me on several different social platforms. Here are some of them:",
        ]}
      />
      <SocialLinks
        titles={["Email", "LinkedIn", "GitHub", "Twitter", "Instagram"]}
        links={[
          "mailto:christian@cbernier.com",
          "https://linkedin.com/in/christian-bernier-965885167/",
          "https://github.com/christianbernier",
          "https://twitter.com/cberns__",
          "https://instagram.com/christianjbernier",
        ]}
      />
      <Gap height="30px" />
      <BodyHeader text="Programming portfolio" line={true} />
      <BodyText
        paragraphs={[
          "I've written a lot of programs over the years. Here are pretty much all the completed program I could find on my computer. Unfortunetely, many have been lost over the years before I used GitHub and decent backup systems.",
          "If you have any questions about any program, please ask! I'd be happy to answer them.",
        ]}
      />
      <div
        css={css`
          background-color: var(--background-blue);
          padding: 10px;
          border-radius: 10px;
          margin: 0 5vw;
          height: 800px;
          overflow-y: scroll;
          overflow-x: hidden;

          @media only screen and (min-width: 1700px) {
            margin: 0 calc(((100vw - 1700px) / 2) + 30px);
          }
        `}
      >
        {Projects.map((p) => (
          <ProjectTile
            title={p.title}
            description={p.description}
            url={p.url}
            date={p.dateActive}
            languages={p.languages}
            openSourceUrl={p.sourceCodeUrl}
          />
        ))}
      </div>
      <Gap height="30px" />
      <BodyHeader text="Media portfolio" line={true} />
      <BodyText
        paragraphs={[
          "This gallery includes photos I've taken, videos I have recorded and edited, and graphics I have made.",
          "If you have any questions about anything here, please ask! I'd be happy to answer them.",
        ]}
      />
      <div
        css={css`
          background-color: var(--background-blue);
          padding: 10px;
          border-radius: 10px;
          margin: 0 5vw;
          height: 800px;
          overflow-y: scroll;
          overflow-x: hidden;

          @media only screen and (min-width: 1700px) {
            margin: 0 calc(((100vw - 1700px) / 2) + 30px);
          }
        `}
      >
        <MediaTile
          title="Stars Time-lapse"
          description="I'm experimenting with some astrophotography and this is the first decent-looking product I've been able to make! It's a time-lapse of stars I recorded in my front yard."
          date="August 21st, 2020"
          embed={<iframe width="100%" height="350" src="https://www.youtube.com/embed/cazfspmfj08" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        />
        <MediaTile
          title="Boston and Cambridge Photography"
          description="I've taken a lot of images in Boston and Cambridge over the years. Here are some of my favorites."
          date="2017-present"
          embed={<iframe src="https://drive.google.com/embeddedfolderview?id=1m6qOt7QJ8M-tP8zqbR7Z695pU4-6um5C#list" width="600" height="315" frameborder="0"></iframe>}
        />
        <MediaTile
          title="Blocks App Advertisements"
          description="A set of advertisements I made for my friend's app titled Blocks."
          date="December 2019-January 2020"
          embed={<iframe src="https://drive.google.com/embeddedfolderview?id=1UxQEJAiwtDLx6asalwzqx1VT3bHO1MqD#list" width="600" height="315" frameborder="0"></iframe>}
        />
        <MediaTile
          title="Diocletian - Hall of Fame or Shame"
          description="A persuasive video for a world history course explaining why Roman emperor Diocletian should be in the Hall of Fame."
          date="March 13th, 2018"
          embed={<iframe width="100%" height="350" src="https://www.youtube.com/embed/FAulysO4uJQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        />
        <MediaTile
          title="The Transistor: How are you watching this video?"
          description="I explain how the transistor works. It’s a simple device that revolutionized the modern world."
          date="November 20th, 2017"
          embed={<iframe width="100%" height="350" src="https://www.youtube.com/embed/GE6A9u_6Fhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        />
        <MediaTile
          title="The Columbus Controversy"
          description="Should Columbus Day be a holiday? Find out in this video about Christopher Columbus, what he did, and what he was like."
          date="October 10th, 2016"
          embed={<iframe width="100%" height="350" src="https://www.youtube.com/embed/Ls_b58XE8rM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        />
        <MediaTile
          title="Why Cheap Foods are Bad"
          description="This is a project I did for school on why cheap foods are bad. They are bad because they have corn, because the government is tricking us into eating them, and because they can have huge health costs."
          date="May 10th, 2016"
          embed={<iframe width="100%" height="350" src="https://www.youtube.com/embed/ApUyMNNA1LA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        />
        <MediaTile
          title="Compass Roses"
          description="I explain how compass roses are labeled, the abbreviations for those labels, and more."
          date="April 17th, 2016"
          embed={<iframe width="100%" height="350" src="https://www.youtube.com/embed/2r3XUHo8DGs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        />
      </div>
      <Gap height="100px" />
      <Footer />
    </>
  );
};
