// import { link, uselocation } from 'react-router-dom';
// import { useUser } from '../../context/userContext.jsx';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth.js';
import { useForm } from '../../hooks/useForm.js';
import { useHistory, useLocation } from 'react-router-dom';

export default function Auth() {
  const history = useHistory();
  const location = useLocation();
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { from } = location.state || { from: { pathname: '/' } };
  const auth = useAuth();

  const { formState, handleFormChange } = useForm({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSuccessful = auth.login(formState.username, formState.password);
    return loginSuccessful ? history.replace(from) : setError('error');
  };

  return (
    <fieldset className="w-1/4 border p-4">
      <legend>Sign In</legend>
      <form
        onSubmit={handleLogin}
        className="grid grid-cols-[1fr_2fr] grid-rows-3"
      >
        <label htmlFor="username" className="self-center text-right">
          Username
        </label>
        <input
          onChange={handleFormChange}
          value={formState.username}
          id="username"
          type="text"
          name="username"
          className="border p-2 m-3"
          required
        />
        <label htmlFor="password" className="self-center text-right">
          Password
        </label>
        <input
          onChange={handleFormChange}
          value={formState.password}
          id="password"
          type="password"
          name="password"
          className="border p-2 m-3"
          required
        />
        <button
          type="submit"
          className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
        >
          Sign In
        </button>
      </form>
      {error && <p className="text-center text-red-500 font-bold">{error}</p>}
    </fieldset>
  );
}
