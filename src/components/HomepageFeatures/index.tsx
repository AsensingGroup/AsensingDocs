import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'IMU 单元',
    Svg: require('@site/static/img/product-imu-module_200px.svg').default,
    description: (
      <>
        导远 IMU 系列模组为苛刻的应用场景提供可靠的惯性测量性能，
        设备出厂前已经过航空级精密转台的温度和动态校准，确保在恶劣的环境下正常工作的可靠性。
      </>
    ),
  },
  {
    title: 'P-Box 总成',
    Svg: require('@site/static/img/product-pbox_200px.svg').default,
    description: (
      <>
        高精度组合定位系统（P-Box），即使在隧道和地下停车场等卫星信号不佳的场景，
        也能够提供低延迟位置、速度、姿态和授时的信息。
      </>
    ),
  },
  {
    title: '激光雷达',
    Svg: require('@site/static/img/product-lidar-a2_200px.svg').default,
    description: (
      <>
        高可靠性、高性能的车规级激光雷达（LiDAR），可应用于车载高阶辅助驾驶、物流机器人、
        工业机器人、工程机械等领域，支持建图、定位、识别、避障等功能。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
  );
}
