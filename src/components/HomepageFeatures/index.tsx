import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  external: boolean;
  image?: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Jeanne d\'Arc comic book timeline',
    link: "/timeline/timeline_map.html",
    external: true,
    image: "/img/mappedcomic.png",
    description: (
      <>
        Jeanne d'Arc comic book with timeline and geographical coordinates!
      </>
    ),
  },
  {
    title: "Jeanne d'Arc comic book",
    link: "/book_en/JeanneBookEn.pdf",
    external: true,
    image: "/book_en/cover1.png",
    description: (
      <>
       Jeanne d'Arc comic book.
      </>
    ),
  },
  {
    title: "Joan's story in multiple languages in text, image, and video",
    link: "/docs/md/en",
    external: false,
    image: "/img/joanofarc.png",
    description: (
      <>
        Joan's story in multiple languages in text, image, and video.
      </>
    ),
  },
  {
    title: 'Detailed timeline',
    link: "/timeline/timeline.html",
    external: true,
    image: "/img/timeline.png",
    description: (
      <>
        A more detailed historical timeline
      </>
    ),
  },
  {
    title: "Act 2: The timeline of Joan's Soul",
    link: "https://time.graphics/line/924985",
    external: true,
    image: "/img/timeline2.png",
    description: (
      <>
        Discover Jeanne's spiritual timeline alongside music created to guide you through her journey.
      </>
    ),
  },
  {
    title: 'A contemporary, provable effort',
    link: "/timeline/timeline_now.html",
    external: true,
    image: "/img/timeline_now.png",
    description: (
      <>
        Continuous effort made by people inspired by Jeanne's sacrifice and spiritual journey. From flowers left at her burning site in Rouen, to poetry and more.
      </>
    ),
  },
  {
    title: 'Joan of Arc, Supermaid',
    link: "/docs/rock_opera",
    external: false,
    image: "/img/supermaid1.png",
    description: (
      <>
       A Rock Opera.
      </>
    ),
  },
  {
    title: 'Joan of Arc, Supermaid Project',
    link: "https://ctzurcanu.github.io/musical-JAS/",
    external: true,
    image: "/img/supermaid1.png",
    description: (
      <>
       A Rock Opera. External project repository.
      </>
    ),
  },
  {
    title: 'More art',
    link: "/more.html",
    external: true,
    image: "/img/more.png",
    description: (
      <>
       More art.
      </>
    ),
  },
];

function Feature({title, link, external, Svg, image, description}: FeatureItem) {
  const txt = (<><div className="text--center">
      {Svg ? <Svg className={styles.featureSvg} role="img" /> : <img
        src={image}
        alt={title}
        className={styles.featureSvg}
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      />}
    </div>
    <div className="text--center padding-horiz--md">
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div></>)
  const lnk = external ?
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.featureLink}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >{txt}</a>
    : <Link
        to={link}
        className={styles.featureLink}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {txt}
      </Link>
  return (
    <div className={clsx('col col--4')}>
      {lnk}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
  );
}
