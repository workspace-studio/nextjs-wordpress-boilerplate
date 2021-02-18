import React from 'react';
import cn from 'classnames';
import Alert from 'components/Alert';
import DocumentTitle from 'components/DocumentTitle';
import Footer from 'components/Footer';
import Meta from 'components/Meta';

import { ThemeContextProvider } from 'utils/context/ThemeContext';

import styles from './Layout.module.scss';

interface LayoutProps {
  theme?: 'light' | 'dark';
  title?: string;
  preview?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ theme = 'light', title, preview, children }) => (
  <ThemeContextProvider value={{ theme }}>
    <Meta />
    <DocumentTitle title={title} />
    <div className={cn(styles.container, { [styles.darkTheme]: theme === 'dark' })}>
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </ThemeContextProvider>
);

export default Layout;
