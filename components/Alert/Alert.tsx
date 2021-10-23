import React from 'react';
import Container from 'components/Container';
import Hyperlink from 'components/Hyperlink';

import styles from './Alert.module.scss';

interface AlertProps {
  preview?: boolean;
}

const Alert: React.FC<AlertProps> = ({ preview }) => {
  if (!preview) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.text}>
          This page is a preview.&nbsp;
          <Hyperlink href="/api/exit-preview" AnchorProps={{ className: styles.link }}>
            Click here
          </Hyperlink>
          &nbsp; to exit preview mode.
        </div>
      </Container>
    </div>
  );
};

export default Alert;
