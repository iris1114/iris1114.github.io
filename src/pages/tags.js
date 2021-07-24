import React from "react";
import Layout from "@iris1114/gatsby-theme-blog/src/components/Layout";
import Section from "@iris1114/gatsby-theme-blog/src/components/Section";
import SEO from "@iris1114/gatsby-theme-blog/src/components/SEO";
import styled from "styled-components";
import "../assets/css/style.css";



function Tags() {
  return (
    <Layout>
      <SEO />
      <Section>
        <TagsSection>
          <h1 className="title">Tags</h1>
        </TagsSection>
      </Section>
    </Layout>
  );
}

const TagsSection = styled.div`
  text-align: center;

  .title {
    font-size: 30px;
    padding-top: 80px;
  }


`;

export default Tags;
