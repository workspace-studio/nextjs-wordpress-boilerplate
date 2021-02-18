import React from 'react';
import Link, { LinkProps } from 'next/link';

interface HyperlinkProps extends LinkProps {
  AnchorProps?: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
}

const Hyperlink: React.FC<HyperlinkProps> = ({ href, children, AnchorProps, ...props }) => (
  <Link href={href} {...props}>
    <a {...AnchorProps}>{children}</a>
  </Link>
);

export default Hyperlink;
