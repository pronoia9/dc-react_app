import React from 'react';

import { Link } from 'gatsby';

import { headerSection } from '../../utils/data';

export default function Header() {
  return (
    <div>
      {headerSection.navLinks.map(({ title, icon, url }, index) => (
        <Link>
          <img src={icon} />
          <p key={index}>{title}</p>
        </Link>
      ))}
    </div>
  );
}
