import React from 'react';

import ScrambledText from './snippets/scrambled_text';

export default function Snippets() {
  return (
    <div className="snippets">
      <div className="body">
        <div className="snippet">
          <ScrambledText />
        </div>
      </div>
    </div>
  );
}
