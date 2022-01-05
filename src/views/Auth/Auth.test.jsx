import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ProvideAuth } from '../../context/ProvideAuth.jsx';
import Layout from '../Layout/Layout';
import Auth from './Auth.jsx';

it('renders the Auth view', () => {
  const { container } = render(
    <ProvideAuth>
      <MemoryRouter initialEntries={['/login']}>
        <Layout>
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>
          </Switch>
        </Layout>
      </MemoryRouter>
    </ProvideAuth>
  );

  expect(container).toMatchSnapshot();
});
