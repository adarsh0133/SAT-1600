import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
//   eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('You must be logged in to access this page.');
        router.push(`/login?redirect=${router.asPath}`); // Redirect to login page if no token
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;