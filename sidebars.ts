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
        {
          type: "category",
          label: "構造力学API",
          link: {
            type: "generated-index",
            description: "構造力学計算に基づくエンドポイントをまとめたセクションです。",
            slug: '/api/general/toc',
          },
          items: [
            "api/general/culc_cmq",
          ],
        },
        {
          type: "category",
          label: "鉄骨造API",
          link: {
            type: "generated-index",
            description: "鉄骨造に関するエンドポイントをまとめたセクションです。",
            slug: '/api/steel/toc',
          },
          items: [
            "api/steel/steel_h_postsection",
            "api/steel/steel_wc_postsection",
            "api/steel/steel_lc_postsection",
            "api/steel/steel_box_postsection",
            "api/steel/steel_pipe_postsection",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "構造計算書",
      link: {
        type: "generated-index",
        description: "構造計算の実務に役立つ資料を記載しています。",
        slug: '/sheet/toc',
      },
      items: [
        "sheet/edit_excel_template"
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
