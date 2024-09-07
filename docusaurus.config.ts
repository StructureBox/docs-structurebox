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
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
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
          type: "doc",
          docId: "structure/intro",
          position: "left",
          label: "Structure", // Structureページへのリンク
        },
        {
          type: "doc",
          docId: "program/intro",
          position: "left",
          label: "Program", // Programページへのリンク
        },
        {
          type: "doc",
          docId: "business/intro",
          position: "left",
          label: "Business",
        },
        { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Document",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Media",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "SNS",
          items: [
            {
              label: "X (旧twitter)",
              href: "https://x.com/StructureBOX",
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
      copyright: `Copyright © ${new Date().getFullYear()} StructureBox`,
    },
    prism: {
      theme: prismThemes.vscDarkPlus,
      darkTheme: prismThemes.vscDarkPlus,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
