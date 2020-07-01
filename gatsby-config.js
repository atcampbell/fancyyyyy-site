module.exports = {
    siteMetadata: {
        title: `FANCYYYYY`,
        description: `Eurorack modules and radical electornic music`,
        author: `@atttcampbell`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#ff8c8c`,
                theme_color: `#ff8c8c`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `IBM Plex Mono`,
                        variants: [`400`],
                    },
                ],
            },
        },
    ],
};
