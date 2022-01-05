import { useEntries } from '../../context/entryContext.jsx';
import Entry from '../Entry/Entry.jsx';
// Comment because Erich said so a little bit more informative

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
