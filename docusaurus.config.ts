import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Jeanne d\'Arc',
  tagline: 'The Heroic Martyr for the Truth',
  favicon: './img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jeannedarc.provable.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'loredanacirstea', // Usually your GitHub org/user name.
  projectName: 'jeannedarc', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'] // ,'fr','de','es','ro','gr','hu','it','pl','ru'],
  },

  presets: [
    [
      'classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/loredanacirstea/jeannedarc/tree/main',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/loredanacirstea/jeannedarc/tree/main',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    // Declare a <link> preconnect tag
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://example.com',
      },
    },
    // Declare some json-ld structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        name: "Jeanne d'Arc Romée",
        description: "Joan of Arc historical timelines and digital art",
        url: "https://jeannedarc.provable.dev",
        logo: 'https://jeannedarc.provable.dev/img/joanofarc.png',
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name: 'Joan of Arc',
        alternateName: ['Jeanne d\'Arc', 'Jeanne d\'Arc Romée', 'The Maid of Orléans'],
        birthDate: '1412',
        deathDate: '1431-05-30',
        birthPlace: 'Domrémy, France',
        deathPlace: 'Rouen, France',
        nationality: 'French',
        description: 'French peasant woman who became a military leader during the Hundred Years\' War',
        sameAs: [
          'https://en.wikipedia.org/wiki/Joan_of_Arc',
          'https://www.britannica.com/biography/Saint-Joan-of-Arc'
        ]
      }),
    },
  ],
  themeConfig: {
    metadata: [
      {name: 'keywords', content: "jeanne d'arc, joan of ark, romee, hero, martir, history, rock opera, medieval, France, Rouen"},
      {name: 'description', content: 'Explore the life of Joan of Arc through interactive timelines, rock opera, and digital art'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {property: 'og:image', content: 'https://jeannedarc.provable.dev/img/joanofarc.png'},
    ],
    image: 'img/jeanne2small.png',
    navbar: {
      title: 'Jeanne d\'Arc',
      logo: {
        alt: 'Jeanne d\'Arc Logo',
        src: 'img/joanofarc.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Info',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/loredanacirstea/jeannedarc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Info',
          items: [
            {
              label: 'Intro',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/joanofarcromee',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/loredanacirstea/jeannedarc',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024-${new Date().getFullYear()} Christian Tzurcanu, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
