import contributors from './contributors.json';

export const siteMetadata = {
  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@gatsbyjs`,
  siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  garden: {
    basePath: '/garden',
  },
  feed: {
    basePath: `/page`,
    useIndex: true,
    notesPerPage: 10,
  },
  contributors,
};

export const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
      },
    },
  },
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/data/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `garden`,
      path: `${__dirname}/src/garden/notes`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `gardenFiles`,
      path: `${__dirname}/src/garden/Files`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            showLineNumbers: true,
            prompt: {
              user: 'root',
              host: 'localhost',
              global: false,
            },
          },
        },
        {
          resolve: `gatsby-remark-classes`,
          options: {
            classMap: {
              // h1
              'heading[depth=1]': 'text-4xl font-bold text-primary leading-relaxed',
              // h2
              'heading[depth=2]': 'text-3xl text-neutral-200 font-bold leading-relaxed',
              // h3
              'heading[depth=3]': 'text-2xl text-neutral-200 font-bold leading-relaxed',
              // h4
              'heading[depth=4]': 'text-xl text-neutral-200 font-bold leading-relaxed',
              // h5
              'heading[depth=5]': 'text-base text-neutral-200 font-bold leading-relaxed',
              // h6
              'heading[depth=6]': 'text-sm text-neutral-200 font-bold leading-relaxed',
              // p
              paragraph: 'text-base font-normal text-neutral-200 leading-relaxed',
              // a
              link: 'text-primary text-sm font-normal hover:underline active:text-primary-dark',
              // table
              table: 'text-base font-normal text-neutral-200 border border-brand-grey',
              tableCell: 'border border-brand-grey py-1 px-2',
              'tableRow:first-child > tableCell': 'text-primary font-semibold',
              // strong
              strong: 'font-bold',
              // blockquote
              blockquote: 'ml-4 border-l-2 border-brand-yellow pl-6 italic',
              'blockquote > paragraph': 'text-base text-neutral-400 font-medium',
              'blockquote > blockquote': 'ml-4 mt-4',
              // img
              image: 'w-full rounded-lg',
              // ul
              'list[ordered=false]': 'ml-8 list-disc text-base font-normal text-neutral-200 marker:text-primary',
              // ol
              'list[ordered=true]': 'ml-8 list-decimal text-base font-normal text-neutral-200 marker:text-primary',
              // hr
              thematicBreak: 'border-brand-grey',
            },
          },
        },
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: '/',
      background_color: `#663399`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      // theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-typescript`,
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      emitSchema: {
        'src/__generated__/gatsby-introspection.json': true,
        'src/__generated__/gatsby-schema.graphql': true,
      },
    },
  },
  `gatsby-plugin-postcss`,
];
