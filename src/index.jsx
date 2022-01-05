import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/userContext';
import { EntryProvider } from './context/entryContext';

ReactDOM.render(
  <React.StrictMode>
    <EntryProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </EntryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
