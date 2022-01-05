import React from 'react';
import App from './App';
import { UserProvider } from './context/UserContext';
import { EntryProvider } from './context/EntryContext';
import { render } from '@testing-library/react';

it('should render index.jsx', () => {
  const { container } = render(
    <React.StrictMode>
      <EntryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </EntryProvider>
    </React.StrictMode>
  );
  // const sign = screen.getByText('Sign');
  // expect(sign).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
