import React from 'react';
import Head from 'next/head';

interface DocumentTitleProps {
  title?: string;
}

const DocumentTitle: React.FC<DocumentTitleProps> = ({ title = '' }) => {
  const docTitle = title ? `${title} | Next.js WordPress boilerplate` : 'Next.js WordPress boilerplate';
  return (
    <Head>
      <title>{docTitle}</title>
    </Head>
  );
};

export default DocumentTitle;
