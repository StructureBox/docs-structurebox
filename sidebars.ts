import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  products: [
    "intro",
    {
      type: "category",
      label: "構造計算API",
      link: {
        type: "generated-index",
        description: "5 minutes to learn the most important Docusaurus concepts.",
      },
      items: [
        "api/intro",
        "api/culc_cmq",
      ],
    },
    {
      type: "category",
      label: "構造設計",
      items: [
        "structure/intro"
      ],
      link: {
        type: "generated-index",
        description: "5 minutes to learn the most important Docusaurus concepts.",
      },
    },
    {
      type: "category",
      label: "プログラム",
      items: [
        "program/intro"
      ],
      link: {
        type: "generated-index",
        description: "5 minutes to learn the most important Docusaurus concepts.",
      },
    },
  ],
};

export default sidebars;
