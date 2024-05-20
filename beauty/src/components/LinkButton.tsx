import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const LinkButton = ({ children, href, className }: Props) => {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

export default LinkButton;
