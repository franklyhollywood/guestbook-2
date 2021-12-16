import React from 'react';

export default function Entry({ name, message }) {
  return (
    <div>
      {name}: {message}
    </div>
  );
}
