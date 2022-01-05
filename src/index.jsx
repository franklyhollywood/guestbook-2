import ReactDOM from 'react-dom';
import App from './App';
import { EntryProvider } from './context/entryContext';
import { ProvideAuth } from './context/ProvideAuth.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <EntryProvider>
        <App />
      </EntryProvider>
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById('root')
);
