import React from 'react';
import App from './App';
// import { UserProvider } from './context/userContext';
import { EntryProvider } from './context/entryContext';
import { render } from '@testing-library/react';
import { ProvideAuth } from './context/ProvideAuth.jsx';

it('should render index.jsx', () => {
  const { container } = render(
    <React.StrictMode>
      <EntryProvider>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </EntryProvider>
    </React.StrictMode>
  );
  // const sign = screen.getByText('Sign');
  // expect(sign).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
