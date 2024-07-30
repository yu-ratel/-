import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // eslint-disable-next-line react/require-default-props
  variant?: 'primary' | 'update' | 'save' | 'mypageClear';
}

function Button({ variant = 'primary', children, ...props }: Props) {
  const STYLE = {
    primary:
      'bottom-36 mx-20 h-16 rounded-xl w-44 content-center justify-self-center bg-deepBraun text-center text-white shadow-xl',
    update: 'm-2 text-sm',
    save: 'text-sm mb-4 w-[30%]',
    mypageClear: 'w-[4%]',
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={STYLE[variant]} {...props}>
      {children}
    </button>
  );
}

export default Button;
