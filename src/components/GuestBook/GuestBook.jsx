import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');

  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  function updateGuestName() {
    if (!guestEntry) return;
    setUser(name);
    setEntries([...entries, { name, message: guestEntry }]);
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
            <button
              type="button"
              onClick={() => {
                setUser('');
                setName('');
              }}
            >
              Not {user}
            </button>
          )}
        </div>
      </form>
    </>
  );
}
