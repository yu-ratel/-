const errorHandler = () => {
  localStorage.removeItem('userId');
  window.location.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`);
};

export default errorHandler;
