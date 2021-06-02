import React from 'react'
import styled from 'styled-components'

const Card = ({ title, desc, imgUrl, videoSrc, demoUrl, tags }) => {
    return (
        <StyledCard>
            <a href={demoUrl}>
                <div className="title">{title}</div>
                <div className="image_section">
                    {videoSrc ? (
                        <video width="100%" autoPlay loop>
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    ) : (
                        <img src={imgUrl} alt={title} />
                    )}
                </div>
                <div className="tags_section">
                    {tags.map((tag, index) => {
                        return (
                            <span className="f-lg-l f-m tag" key={index}>
                                #{tag}
                            </span>
                        )
                    })}
                </div>
            </a>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    width: 300px;
`

export default Card
