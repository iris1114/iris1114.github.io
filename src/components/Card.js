import React from "react";
import styled from "styled-components";

const Card = ({ title, desc, imgUrl, videoSrc, demoUrl, tags }) => {
  return (
    <StyledCard>
      <a href={demoUrl}>
        <div className="f-lg-m f-m card_title">{title}</div>
        <div className="image_section">
          <img src={imgUrl} alt={title} />
          <div className="image_padding"></div>
        </div>
        <div className="tags_section">
          {tags.map((tag, index) => {
            return (
              <span className="f-lg-s f-s tag" key={index}>
                #{tag}
              </span>
            );
          })}
        </div>
      </a>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin: 5px;
  width: 300px;

  .card_title {
    text-align: left;
  }

  .image_section{
    position: relative;

    .image_padding{
      position: absolute;
      top: 0px;
      padding-top: 300px;
      width: 100%;
    }
  }
  
  .tags_section {
    text-align: right;

    .tag {
      margin-right: 10px;
    }
  }
`;

export default Card;
