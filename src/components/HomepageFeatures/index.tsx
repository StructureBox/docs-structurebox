import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import aboutFeatureBook from "@site/static/img/about_feature_book.svg"
import aboutFeatureWrite from "@site/static/img/about_feature_write.svg"
import aboutFeatureSyueki from "@site/static/img/about_feature_syueki.svg"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "構造設計とTips",
    Svg: aboutFeatureBook,
    description: <>構造設計に関わるちょっとしたTipsをご紹介します。</>,
  },
  {
    title: "構造設計と設計資料",
    Svg: aboutFeatureWrite,
    description: <>構造設計の実務で利用する設計資料を共有します。</>,
  },
  {
    title: "構造設計とお金",
    Svg: aboutFeatureSyueki,
    description: <>構造設計とお金のことに関して共有します。</>,
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
