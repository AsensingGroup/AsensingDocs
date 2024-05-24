import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Asensing Docs',
  tagline: '导远电子在线文档中心',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Asensing Docs',
      logo: {
        alt: 'Asensing Docs Logo',
        src: 'img/logo.ico',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Tutorial',
          position: 'left',
          items: [
            {to: '/docs/intro', label: 'LiDAR'},
          ],
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/AsensingGroup/AsensingDocs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'LiDAR',
              to: '/docs/intro',
            },
            {
              label: 'IMU',
              to: '/docs/intro',
            },
            {
              label: 'GNSS',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: '知乎',
              href: 'https://www.zhihu.com/org/dao-yuan-dian-zi-83',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/asensing/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AsensingGroup',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Asensing',
              to: 'https://www.asensing.com',
            },
          ],
        },
      ],
      copyright: `Copyright © 2014-${new Date().getFullYear()} Guangzhou Asensing Technology Co., Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
