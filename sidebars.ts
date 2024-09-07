import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "構造設計",
      items: ["structure/intro"],
    },
    {
      type: "category",
      label: "プログラム",
      items: ["program/intro"],
    },
    {
      type: "category",
      label: "ビジネス",
      items: [
        "business/intro",
        "business/money",
        "business/schedule",
        "business/mitumori",
      ],
    },
  ],
};

export default sidebars;
