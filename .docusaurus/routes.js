import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e70'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '355'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7d1'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/',
                component: ComponentCreator('/docs/md/', '07d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/de',
                component: ComponentCreator('/docs/md/de', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/en',
                component: ComponentCreator('/docs/md/en', '73d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/es',
                component: ComponentCreator('/docs/md/es', 'b6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/fr',
                component: ComponentCreator('/docs/md/fr', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/gr',
                component: ComponentCreator('/docs/md/gr', 'c7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/hu',
                component: ComponentCreator('/docs/md/hu', '431'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/it',
                component: ComponentCreator('/docs/md/it', '5f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/pl',
                component: ComponentCreator('/docs/md/pl', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/PrimarySourcesEn',
                component: ComponentCreator('/docs/md/PrimarySourcesEn', '54e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/ro',
                component: ComponentCreator('/docs/md/ro', '85e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md/ru',
                component: ComponentCreator('/docs/md/ru', '2cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rock_opera',
                component: ComponentCreator('/docs/rock_opera', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/statue',
                component: ComponentCreator('/docs/statue', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
