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
    title: "構造計算書Tips",
    Svg: documentFeatureStructure,
    description: <>
    構造計算書作成のためのTipsを共有します。<br />
    構造設計の実務で利用する設計資料などを<br />
    PCやスマホで素早く閲覧頂けます。(不定期更新)
    </>,
  },
  {
    title: "構造図Tips",
    Svg: documentFeatureProgram,
    description: <>
    構造図作図のためのTipsを共有します。<br />
    構造図を実務で作成する際のフォーマット資料や<br />
    標準図などをご利用いただけます。(不定期更新)
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
