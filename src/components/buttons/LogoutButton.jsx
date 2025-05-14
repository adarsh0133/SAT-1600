import { useRouter } from 'next/router';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    alert('You have been logged out.');
    router.push('/login'); // Redirect to login page
  };

  return <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>;
};

export default LogoutButton;