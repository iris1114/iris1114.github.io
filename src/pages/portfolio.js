import React from 'react'

import Layout from '@iris1114/gatsby-theme-blog/src/components/Layout'
import Section from '@iris1114/gatsby-theme-blog/src/components/Section'
import SEO from '@iris1114/gatsby-theme-blog/src/components/SEO'
import styled from 'styled-components'

function Portfolio() {
    return (
        <Layout>
            <SEO />
            <Section>
                <PortfolioSection>
                    <h1 className="title">Portfolio</h1>
                    <div className="container"></div>
                </PortfolioSection>
            </Section>
        </Layout>
    )
}

const PortfolioSection = styled.div`
    margin: 80px 0px;
    text-align: center;

    .title {
        font-size: 30px;
    }
`

export default Portfolio
