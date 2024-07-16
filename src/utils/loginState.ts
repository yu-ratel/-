import { headers } from 'next/headers';

const loginState = () => {
  return headers().get('isUser') === 'true';
};

export default loginState;
