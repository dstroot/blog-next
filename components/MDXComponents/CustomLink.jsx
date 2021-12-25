import Link from 'next/link';

export const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    );
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};
