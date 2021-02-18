import React from 'react';
import Hyperlink from 'components/Hyperlink';

import styles from './Header.module.scss';

const Header: React.FC = () => (
  <h2 className={styles.container}>
    <Hyperlink href="/" AnchorProps={{ className: styles.link }}>
      Next.js WordPress boilerplate
    </Hyperlink>
    .
  </h2>
);

export default Header;
