import { useContext, createContext, useState } from 'react';

// create our context
const UserContext = createContext();

// create a user provider that takes in the children

const UserProvider = ({ children }) => {
  // create our text
  const [user, setUser] = useState('');

  // use our provider context
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook
const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      'useUser hook must be called within a UserContext Provider'
    );
  }

  return context;
};

export { UserProvider, useUser };

// Create a context file for your state you want to share
// Wrap the provider around your app
// Use the custom hook inside the components that need it.
