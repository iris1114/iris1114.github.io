module.exports = {
    siteMetadata: {
        title: `Iris JustDoIt`,
        name: `Iris Blog`,
        siteUrl: `https://iris1114.github.io/`,
        description: `food, code, travel`,
        hero: {
            heading: `Coding taught me never to give up if something doesn't work.`,
            maxWidth: 700,
        },
        social: [
            {
                name: `github`,
                url: `https://github.com/iris1114`,
            },
            {
                name: `instagram`,
                url: `https://www.instagram.com/iris.justdoit/`,
            },
            {
                name: `linkedin`,
                url: `https://www.linkedin.com/in/iris-chew`,
            },
            {
                name: `youtube`,
                url: `https://www.youtube.com/channel/UCnvpYPFpUDzNi1kUp6eBGDw`,
            },
        ],
    },
    plugins: [
        {
            resolve: '@iris1114/gatsby-theme-blog',
            options: {
                contentPosts: 'content/posts',
                contentAuthors: 'content/authors',
                basePath: '/',
                authorsPage: true,
                sources: {
                    local: true,
                    // contentful: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Novela by Narative`,
                short_name: `Novela`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/images/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {},
        },
    ],
}
