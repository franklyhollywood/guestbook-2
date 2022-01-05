import { useState } from 'react';
import { useEntries } from '../context/entryContext.jsx';
// import { useUser } from '../../context/userContext';
import { useAuth } from '../../hooks/useAuth.js';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser, logout } = useAuth();

  function updateGuestName() {
    if (!guestEntry) return;
    // setUser(name);
    setEntries([...entries, { name: user, message: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuestName();
  };

  const guestNameInput = (
    <div>
      <div>
        <label htmlFor="guestName">Guest Name</label>
      </div>
      <div>
        <input
          id="guestName"
          type="text"
          placeholder="Guest Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );

  const displayMessage = user
    ? `Thanks for Signing ${user}!`
    : 'Please Sign the Guestbook!';

  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        {user ? null : guestNameInput}
        <div>
          <div>
            <label htmlFor="guestEntry">Guest Entry</label>
          </div>
          <div>
            <textarea
              id="guestEntry"
              value={guestEntry}
              placeholder="Your Entry!"
              onChange={(e) => setGuestEntry(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="button" type="submit">
            Sign
          </button>
          {user && (
            <button type="button" onClick={logout}>
              Not {user}
            </button>
          )}
        </div>
      </form>
    </>
  );
}
