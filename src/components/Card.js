import React from "react";
import styled from "styled-components";

const Card = ({ title, desc, imgUrl, videoSrc, demoUrl, tags }) => {
  return (
    <StyledCard>
      <a href={demoUrl}>
        <div className="f-lg-m f-m card_title">{title}</div>
        <div className="image_section">
          {videoSrc ? (
            <video width="100%" autoPlay loop muted>
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <img src={imgUrl} alt={title} />
          )}
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
  opacity: 0.7;

  .card_title {
    text-align: left;
  }

  .tags_section {
    text-align: right;

    .tag {
      margin-right: 10px;
    }
  }

  &:hover {
    opacity: 1;
  }
`;

export default Card;
