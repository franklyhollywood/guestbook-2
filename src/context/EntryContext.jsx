import { useContext, createContext, useState } from 'react';

// Create the Context
const EntryContext = createContext();

// Create the EntryProvider component
const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    // Our `value` prop is the value we are providing as the `context` value
    // the `value` prop is the data we want to share globally
    // You would not have access to the `Provider` property without creating the context on line 4
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  );
};

// Create custom hook
const useEntries = () => {
  // custom function prefixed with the word `use`

  // `context` is the value being provided
  const context = useContext(EntryContext); // Using this hook is what makes this a custom hook

  // `context` will be undefined when using this custom hook
  // outside of the provider
  if (context === undefined) {
    throw new Error('useEntries must be used within an EntryContext Provider');
  }

  return context;
};

// Export the provider component and the custom hook
export { EntryProvider, useEntries };
