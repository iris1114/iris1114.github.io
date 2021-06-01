import React from 'react'
import styled from 'styled-components'

const Card = ({ title, desc, imgUrl, videoSrc, demoUrl, tags }) => {
    return (
        <StyledCard>
            <div className="card-image">
                {videoSrc ? (
                    <video width="100%" autoPlay loop>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : (
                    <img src={imgUrl} alt={title} />
                )}
            </div>
            <div className="card-text">
                <a href={demoUrl}>
                    <h2 className="f-lg-2xl f-xl title">{title}</h2>
                </a>
                <p className="f-lg-xl f-l desc">{desc}</p>
                <div className="tags">
                    {tags.map((tag, index) => {
                        return (
                            <span className="f-lg-l f-m tag" key={index}>
                                #{tag}
                            </span>
                        )
                    })}
                </div>
                <a href={demoUrl} className="btn">
                    View Demo
                </a>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled.div``

export default Card
