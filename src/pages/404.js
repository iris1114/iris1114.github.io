import React from 'react'

import Layout from '@iris1114/gatsby-theme-blog/src/components/Layout'
import Section from '@iris1114/gatsby-theme-blog/src/components/Section'
import SEO from '@iris1114/gatsby-theme-blog/src/components/SEO'

function NotFoundPage() {
    return (
        <Layout>
            <SEO />
            <Section>
                <div style={{ marginTop: '100px' }}>404: Page Not Found</div>
            </Section>
        </Layout>
    )
}

export default NotFoundPage
