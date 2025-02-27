// import { transformUrl } from './src/gatsby/remark-transform-url';
import {
  wikilinkToLinkText,
  wikilinkToUrl,
} from './src/gatsby/remark-wikilink';

export const siteMetadata = {
  title: `Hashpire`,
  description: `A community-driven Web3 Digital Garden`,
  twitter: `@hashpire`,
  siteUrl: `https://hashpire.io`, // No trailing slash allowed!
  garden: {
    basePath: '/garden',
  },
  feed: {
    basePath: `/page`,
    useIndex: true,
    notesPerPage: 10,
  },
  defaultMetaImage: '/images/meta-default.png', // Path to the image placed in the 'static' folder
};

export const pathPrefix = '/web3-garden';

export const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-catch-links`,
  `gatsby-plugin-smoothscroll`,
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
      path: `${__dirname}/src/garden/00 - Notes`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-enhanced-wikilink`,
          // must be before copy-linked-files and images. as below uses images and links from here
          options: {
            stripBrackets: true,
            wikilinkToUrl,
            wikilinkToLinkText,
            imageExtensions: ['png', 'jpg', 'jpeg'],
            linkFileExtensions: ['png', 'jpg', 'jpeg', 'pdf'],
          },
        },
        // {
        //   resolve: 'gatsby-remark-url',
        //   options: {
        //     transformUrl: transformUrl,
        //   },
        // },
        {
          // optimize image first
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 896,
          },
        },
        {
          // left over images
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'public',
            ignoreFileExtensions: [], // default value: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
          },
        },
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            icon: `<svg viewBox="0 0 64 64" width="20" height="20" class="text-neutral-200 hover:text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M52.5063 11.4938C50.0682 9.05586 46.7616 7.68622 43.3138 7.68622C39.8659 7.68622 36.5593 9.05586 34.1213 11.4938L29.1715 16.4435C28.9856 16.6292 28.838 16.8497 28.7373 17.0924C28.6366 17.3352 28.5848 17.5954 28.5847 17.8581C28.5846 18.1209 28.6363 18.3812 28.7368 18.624C28.8373 18.8668 28.9847 19.0874 29.1705 19.2732C29.3563 19.459 29.5769 19.6064 29.8197 19.7069C30.0625 19.8074 30.3227 19.8591 30.5855 19.859C30.8483 19.8589 31.1085 19.807 31.3512 19.7063C31.594 19.6056 31.8145 19.4581 32.0001 19.2721L36.9499 14.3224C37.7856 13.4867 38.7777 12.8238 39.8696 12.3715C40.9615 11.9192 42.1318 11.6864 43.3137 11.6864C44.4955 11.6864 45.6658 11.9192 46.7578 12.3714C47.8497 12.8237 48.8418 13.4866 49.6775 14.3223C50.5132 15.158 51.1762 16.1501 51.6285 17.242C52.0808 18.3339 52.3136 19.5042 52.3136 20.6861C52.3136 21.868 52.0808 23.0383 51.6285 24.1302C51.1763 25.2221 50.5133 26.2143 49.6776 27.05L42.6068 34.1213C40.9177 35.8066 38.629 36.7531 36.2428 36.7531C33.8567 36.7531 31.568 35.8066 29.8788 34.1213C29.5036 33.7466 28.995 33.5363 28.4648 33.5365C27.9346 33.5367 27.4262 33.7474 27.0512 34.1223C26.6763 34.4972 26.4656 35.0057 26.4654 35.5359C26.4652 36.0661 26.6756 36.5747 27.0502 36.9499C29.4902 39.3841 32.7961 40.7511 36.2427 40.7511C39.6893 40.7511 42.9952 39.3841 45.4352 36.9499L52.5062 29.8786C54.9441 27.4405 56.3136 24.134 56.3136 20.6862C56.3136 17.2384 54.9441 13.9319 52.5062 11.4938L52.5063 11.4938Z" />
            <path
              d="M31.9999 44.7277L27.0501 49.6774C26.2144 50.5131 25.2223 51.1761 24.1304 51.6284C23.0385 52.0807 21.8682 52.3135 20.6863 52.3135C19.5045 52.3135 18.3342 52.0807 17.2422 51.6284C16.1503 51.1762 15.1582 50.5132 14.3225 49.6775C13.4868 48.8418 12.8238 47.8497 12.3715 46.7578C11.9192 45.6659 11.6864 44.4956 11.6864 43.3137C11.6864 42.1319 11.9192 40.9616 12.3715 39.8697C12.8237 38.7777 13.4867 37.7856 14.3224 36.9499L21.3932 29.8786C23.0822 28.1931 25.371 27.2465 27.7572 27.2465C30.1434 27.2465 32.4321 28.1931 34.1212 29.8786C34.3069 30.0645 34.5274 30.2121 34.7701 30.3128C35.0128 30.4135 35.273 30.4654 35.5358 30.4655C35.7986 30.4656 36.0588 30.4139 36.3016 30.3133C36.5444 30.2128 36.765 30.0654 36.9508 29.8796C37.1367 29.6938 37.284 29.4732 37.3846 29.2304C37.4851 28.9876 37.5368 28.7274 37.5367 28.4646C37.5366 28.2018 37.4847 27.9416 37.384 27.6989C37.2833 27.4562 37.1358 27.2357 36.9498 27.05C34.5098 24.6158 31.2039 23.2487 27.7573 23.2487C24.3107 23.2487 21.0048 24.6158 18.5648 27.05L11.4937 34.1213C9.05823 36.5598 7.6907 39.8656 7.69177 43.3121C7.69284 46.7586 9.06243 50.0636 11.4995 52.5006C13.9365 54.9376 17.2415 56.3071 20.688 56.3081C24.1344 56.3092 27.4403 54.9416 29.8787 52.506L34.8285 47.5563C35.2031 47.1811 35.4135 46.6725 35.4133 46.1423C35.4131 45.6121 35.2024 45.1037 34.8274 44.7287C34.4525 44.3538 33.9441 44.1431 33.4139 44.1429C32.8836 44.1427 32.3751 44.3531 31.9999 44.7277H31.9999Z" />
          </svg>`,
            isIconAfterHeader: true,
          },
        },
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
              // note: scroll-mt-16 lg:scroll-mt-0 are added to prevent overlap with stickied mobile ribbon when scrolled
              // h1
              'heading[depth=1]':
                'text-4xl font-bold text-primary leading-relaxed my-6 scroll-mt-16 lg:scroll-mt-0',
              // h2
              'heading[depth=2]':
                'text-3xl text-neutral-200 font-bold leading-relaxed my-6 scroll-mt-16 lg:scroll-mt-0',
              // h3
              'heading[depth=3]':
                'text-2xl text-neutral-200 font-bold leading-relaxed my-5 scroll-mt-16 lg:scroll-mt-0',
              // h4
              'heading[depth=4]':
                'text-xl text-neutral-200 font-bold leading-relaxed my-6 scroll-mt-16 lg:scroll-mt-0',
              // h5
              'heading[depth=5]':
                'text-base text-neutral-200 font-bold leading-relaxed my-6 scroll-mt-16 lg:scroll-mt-0',
              // h6
              'heading[depth=6]':
                'text-sm text-neutral-200 font-bold leading-relaxed my-6 scroll-mt-16 lg:scroll-mt-0',
              // p
              paragraph:
                'my-5 text-base font-normal text-neutral-400 leading-relaxed',
              // a
              link: 'text-primary text-sm font-normal hover:underline active:text-primary-dark',
              // table
              table:
                'text-base font-normal text-neutral-200 border border-brand-grey',
              tableCell: 'border border-brand-grey py-1 px-2',
              'tableRow:first-child > tableCell':
                'text-primary font-semibold text-center',
              // strong
              strong: 'font-bold',
              // blockquote
              blockquote:
                'my-6 ml-4 border-l-2 border-brand-yellow pl-6 italic',
              'blockquote > paragraph':
                'text-base text-neutral-400 font-medium',
              'blockquote > blockquote': 'ml-4 mt-4',
              // img
              image: 'w-full rounded-lg',
              // ul
              'list[ordered=false]':
                'ml-8 list-disc text-base font-normal text-neutral-200 marker:text-primary',
              // ol
              'list[ordered=true]':
                'ml-8 list-decimal text-base font-normal text-neutral-200 marker:text-primary',
              // hr
              thematicBreak: 'border-brand-grey',
            },
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-transformer-markdown-references`,
    options: {
      types: ['MarkdownRemark'],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Hashpire`,
      short_name: `Hashpire`,
      description: 'In Decentralization We Trust',
      start_url: '/',
      background_color: `#262626`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      theme_color: `#262626`,
      display: `minimal-ui`,
      icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
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
