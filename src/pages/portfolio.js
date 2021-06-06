import React from 'react'
import StackGrid from 'react-stack-grid'
import Layout from '@iris1114/gatsby-theme-blog/src/components/Layout'
import Section from '@iris1114/gatsby-theme-blog/src/components/Section'
import SEO from '@iris1114/gatsby-theme-blog/src/components/SEO'
import styled from 'styled-components'
import { portfolio } from '../assets/js/data'
import '../assets/css/style.css'
import Card from '../components/Card'

function Portfolio() {
    return (
        <Layout>
            <SEO />
            <Section>
                <PortfolioSection>
                    <h1 className="title">Portfolio</h1>
                    <div className="grid_section">
                        <StackGrid
                            monitorImagesLoaded={true}
                            columnWidth={330}
                            gutterWidth={50}
                            gutterHeight={100}
                            appearDelay={50}
                            duration={1000}
                        >
                            {portfolio.map((project) => {
                                return (
                                    <Card
                                        key={project.id}
                                        title={project.title}
                                        desc={project.desc}
                                        imgUrl={project.imageSrc}
                                        videoSrc={project.videoSrc}
                                        demoUrl={project.demoUrl}
                                        tags={project.tags}
                                    />
                                )
                            })}
                        </StackGrid>
                    </div>
                </PortfolioSection>
            </Section>
        </Layout>
    )
}

const PortfolioSection = styled.div`
    text-align: center;

    .title {
        font-size: 30px;
        padding-top: 80px;
    }

    .grid_section {
        margin: 50px 0px;
    }
`

export default Portfolio
