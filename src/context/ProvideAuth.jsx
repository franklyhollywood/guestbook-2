import { createContext, useState } from 'react';
// import dotenv from 'dotenv';
// dotenv.config();
export const authContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const loginSuccessful =
      username === process.env.AUTH_USERNAME &&
      password === process.env.AUTH_PASSWORD;
    if (loginSuccessful) setUser(username);
    return loginSuccessful;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
