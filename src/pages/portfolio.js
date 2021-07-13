import React from "react";
import Layout from "@iris1114/gatsby-theme-blog/src/components/Layout";
import Section from "@iris1114/gatsby-theme-blog/src/components/Section";
import SEO from "@iris1114/gatsby-theme-blog/src/components/SEO";
import styled from "styled-components";
import { portfolio } from "../assets/js/data";
import "../assets/css/style.css";
import Card from "../components/Card";
import Masony from "react-masonry-component";

const masonryOptions = {
  fitWidth: true,
  columnWidth: 300,
  gutter: 20,
  itemSelector: ".project",
};

function Portfolio() {
  return (
    <Layout>
      <SEO />
      <Section>
        <PortfolioSection>
          <h1 className="title">Portfolio</h1>

          <Masony
            className="list"
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {portfolio &&
              portfolio.map((project, index) => (
                <div className="project" key={index}>
                  <Card
                    key={project.id}
                    title={project.title}
                    desc={project.desc}
                    imgUrl={project.imageSrc}
                    videoSrc={project.videoSrc}
                    demoUrl={project.demoUrl}
                    tags={project.tags}
                  />
                </div>
              ))}
          </Masony>
        </PortfolioSection>
      </Section>
    </Layout>
  );
}

const PortfolioSection = styled.div`
  text-align: center;

  .title {
    font-size: 30px;
    padding-top: 80px;
  }

  .list {
    width: 100%;
    list-style: none;
    margin: 50px auto;
  }

  .project {
    display: flex;
    width: 300px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    margin: 20px 0;
  }
`;

export default Portfolio;
