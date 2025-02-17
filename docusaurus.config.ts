import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "StructureBox Documents",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://structurebox.tech",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "structurebox", // Usually your GitHub org/user name.
  projectName: "docs-structurebox",
  trailingSlash: false, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: 'products',
          routeBasePath: 'products',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          path: 'notice',
          routeBasePath: 'notice',
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: "img/opengraph-image.png",
    navbar: {
      title: "ストラボ | StructureBox",
      logo: {
        alt: "ストラボ",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "products",
          position: "left",
          label: "ドキュメント",
        },
        { to: "/notice", label: "お知らせ", position: "left" },
        {
          href: 'https://github.com/StructureBox/docs-structurebox',
          position: 'right',
          className: 'navbar__icon navbar__github',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documents",
          items: [
            {
              label: "構造計算API",
              to: "/products/api/toc",
            },
            {
              label: "構造計算書",
              to: "/products/sheet/toc",
            },
            {
              label: "構造図",
              to: "/products/drawing/toc",
            },
          ],
        },
        {
          title: "Notice",
          items: [
            {
              label: "お知らせ",
              to: "/notice",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "利用規約",
              href: "https://www.structurebox.tech/terms",
            },
            {
              label: "プライバシーポリシー",
              href: "https://www.structurebox.tech/privacy-policy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ストラボ | StructureBox`,
    },
    prism: {
      theme: prismThemes.vscDarkPlus,
      darkTheme: prismThemes.vscDarkPlus,
    },
    customFields: {
      apiBaseUrl: 'https://api.structurebox.tech/v1',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
