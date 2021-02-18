import React from 'react';
import cn from 'classnames';
import Container from 'components/Container';

import { useTheme } from 'utils/context/ThemeContext';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={cn(styles.container, { [styles.darkTheme]: theme === 'dark' })}>
      <Container>
        <div className={styles.padding}>
          <h3 className={styles.text}>Next.js WordPress boilerplate.</h3>
          <div className={styles.column}>
            <a
              href="https://github.com/workspace-agency/nextjs-wordpress-boilerplate"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              View Source Code
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
