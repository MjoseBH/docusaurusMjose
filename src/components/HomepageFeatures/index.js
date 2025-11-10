import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Orquidea',
    Svg: require('@site/static/img/orquidea.svg').default,
    description: (
      <>
      Exótica y sofisticada, la orquídea cautiva con su forma única y colores delicados. Representa belleza, misterio y armonía. Es la flor perfecta para regalar en ocasiones especiales.
      </>
    ),
  },
  {
    title: 'Rosa',
    Svg: require('@site/static/img/rosa.svg').default,
    description: (
      <>
      Elegancia y pasión en cada pétalo. La rosa es símbolo universal del amor, con su fragancia envolvente y colores que van del rojo intenso al blanco puro. Perfecta para expresar sentimientos profundos.
      </>
    ),
  },
  {
    title: 'Girasol',
    Svg: require('@site/static/img/girasol.svg').default,
    description: (
      <>
      El girasol gira buscando la luz, como un pequeño sol en el jardín. Su tamaño imponente y su color amarillo vibrante transmiten alegría, energía y optimismo. Ideal para llenar cualquier espacio de vida. 
      </>
    ),
    
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
