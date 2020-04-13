module.exports = {
  siteMetadata: {
    title: `Marcelo Mazza`,
    seoTitle: `Marcelo Mazza | UX Consultant, Web Designer, Front-end developer`,
    author: `Marcelo Mazza`,
    description: `Marcelo is a freelance UX Designer and Front-end Developer based in Buenos Aires, Argentina with over 14 years of experience.`,
    siteUrl: `http://marcelomazza.com.ar/`,
    social: {
      twitter: `marcelomazza`,
    },
    menuLinks: [
      {
        name: '/',
        link: '/'
      },
      {
        name: 'How I Work',
        link: '/how-i-work'
      },
      {
        name: 'Resume',
        link: '/resume'
      },
      {
        name: 'Contact Me',
        link: '/contact-me'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resume`,
        name: `resume`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1291,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
  ],
}
