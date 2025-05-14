import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext'; // Import AuthContext if you're using it

const Signup = () => {
  const router = useRouter();
  const { login } = useAuth(); // Use the login function from AuthContext
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      // Save token and user info in localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify({ name: formData.name, email: formData.email }));

      // Update global auth state (if using AuthContext)
      login({ name: formData.name, email: formData.email }, data.token);

      alert('Account created successfully! You are now logged in.');
      router.push('/'); // Redirect to home page
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;