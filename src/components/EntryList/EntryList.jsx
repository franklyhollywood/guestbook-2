import React from 'react';
import { useEntries } from '../../context/EntryContext.jsx';
import Entry from '../Entry/Entry.jsx';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div>
      {entries.map((entry, i) => {
        return (
          <Entry
            key={entry.message + i}
            name={entry.name}
            message={entry.message}
          />
        );
      })}
    </div>
  );
}
