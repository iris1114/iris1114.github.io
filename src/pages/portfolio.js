import React from "react";
import Layout from "@iris1114/gatsby-theme-blog/src/components/Layout";
import Section from "@iris1114/gatsby-theme-blog/src/components/Section";
import SEO from "@iris1114/gatsby-theme-blog/src/components/SEO";
import styled from "styled-components";
import { portfolio } from "../assets/js/data";
import "../assets/css/style.css";

function Portfolio() {
  return (
    <Layout>
      <SEO />
      <Section>
        <PortfolioSection>
          <h1 className="title">Side Project</h1>
          <div className="project_list">
            {portfolio &&
              portfolio.map((project, index) => (
                <div className="project" key={index}>
                    <a href={project.demoUrl}>
                      <div className="image_section">
                        <img src={project.imageSrc} alt={project.title} />
                      </div>
                      <div className="f-lg-m f-m card_title">{project.title}</div>
                      <div className="tags_section">
                        {project.tags.map((tag, index) => {
                          return (
                            <span className="f-lg-s f-s tag" key={index}>
                              #{tag}
                            </span>
                          );
                        })}
                      </div>
                    </a>
                </div>
              ))
            }
          </div>
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

  .project_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .project {
    display: flex;
    flex-wrap: wrap;
    width: 330px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    margin: 20px 1%;
    background: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(219, 229, 230);
    border-radius: 10px;
    overflow: hidden;

  .card_title {
    text-align: left;
  }

  .image_section{
    position: relative;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
  }
  
  .tags_section {
    text-align: right;

    .tag {
      margin-right: 10px;
    }
  }
  }
`;

export default Portfolio;
