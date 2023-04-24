import React from 'react';

import { header } from '../../utils/data';

export default function Header() {
  return (
    <div>
      {header.navLinks.map((link, index) => (
        <p>{link}</p>
      ))}
    </div>
  );
}
