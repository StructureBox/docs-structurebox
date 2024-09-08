import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  products: [
    "intro",
    {
      type: "category",
      label: "構造計算API",
      link: {
        type: "generated-index",
        description: "構造設計プログラム開発者向けAPIの仕様詳細について記載しています。",
        slug: '/api/toc',
      },
      items: [
        "api/intro",
        "api/culc_cmq",
      ],
    },
    {
      type: "category",
      label: "構造設計",
      link: {
        type: "generated-index",
        description: "構造設計の実務に関わる設計資料を記載しています。",
        slug: '/structure/toc',
      },
      items: [
        "structure/intro"
      ],
    },
    {
      type: "category",
      label: "プログラム",
      link: {
        type: "generated-index",
        description: "構造設計者がプログラミングで学んだTipsを記載しています。",
        slug: '/program/toc',
      },
      items: [
        "program/intro"
      ],
    },
  ],
};

export default sidebars;
