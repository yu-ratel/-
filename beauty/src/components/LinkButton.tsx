import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  href: string;
}

const LinkButton = ({ children, href }: Props) => {
  return (
    <Link className="m-4" href={href}>
      {children}
    </Link>
  );
};

export default LinkButton;
