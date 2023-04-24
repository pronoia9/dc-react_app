import React from 'react';

import { headerSection } from '../../utils/data';

export default function Header() {
  return (
    <div>
      {headerSection.navLinks.map((link, index) => (
        <p key={index}>{link.title}</p>
      ))}
    </div>
  );
}
