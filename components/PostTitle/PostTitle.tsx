import React from 'react';

import styles from './PostTitle.module.scss';

const PostTitle: React.FC = ({ children }) => <h1 className={styles.container}>{children}</h1>;

export default PostTitle;
