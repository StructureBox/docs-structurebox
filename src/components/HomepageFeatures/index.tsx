import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import documentFeatureAPI from "@site/static/img/document_feature_api.svg"
import documentFeatureStructure from "@site/static/img/document_feature_structure.svg"
import documentFeatureProgram from "@site/static/img/document_feature_program.svg"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "構造計算API",
    Svg: documentFeatureAPI,
    description: <>
    構造計算APIのドキュメントをご紹介します。<br />
    構造計算APIを利用することで簡単に構造計算を<br />
    ご自身のエクセルなどに組み込むことができます。
    </>,
  },
  {
    title: "構造設計資料",
    Svg: documentFeatureStructure,
    description: <>
    構造設計の実務で利用する設計資料を共有します。<br />
    PCやスマホ、タブレットで資料を素早く閲覧頂けます。
    </>,
  },
  {
    title: "プログラムTips",
    Svg: documentFeatureProgram,
    description: <>
    プログラムに関するTipsを共有します。<br />
    プログラミングを建築にどのように活用できるか<br />
    情報交換できると嬉しいです。
    </>,
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
