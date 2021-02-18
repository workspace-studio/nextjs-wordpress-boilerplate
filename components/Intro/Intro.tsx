import React from 'react';

import styles from './Intro.module.scss';

const Intro: React.FC = () => (
  <section className={styles.container}>
    <h1 className={styles.title}>Next.js WordPress boilerplate.</h1>
  </section>
);

export default Intro;