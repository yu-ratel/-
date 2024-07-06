import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // eslint-disable-next-line react/require-default-props
  variant?: 'primary' | 'update';
}

function Button({ variant = 'primary', children, ...props }: Props) {
  const STYLE = {
    primary:
      'bottom-36 mx-20 h-16  w-44 content-center justify-self-center bg-deepBraun text-center text-white shadow-xl',
    update: '',
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={STYLE[variant]} {...props}>
      {children}
    </button>
  );
}

export default Button;
