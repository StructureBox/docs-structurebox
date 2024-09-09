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
        "api/edit_excel_template",
      ],
    },
    {
      type: "category",
      label: "構造計算",
      link: {
        type: "generated-index",
        description: "構造計算の実務に役立つ資料を記載しています。",
        slug: '/structure/toc',
      },
      items: [
        "structure/intro"
      ],
    },
    {
      type: "category",
      label: "構造図",
      link: {
        type: "generated-index",
        description: "構造図作図の実務に役立つ資料を記載しています。",
        slug: '/drawing/toc',
      },
      items: [
        "drawing/intro"
      ],
    },
  ],
};

export default sidebars;
