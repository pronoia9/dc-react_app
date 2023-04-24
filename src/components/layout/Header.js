import React from 'react';

import { Link } from 'gatsby';

import { headerSection } from '../../utils/data';

export default function Header() {
  return (
    <>
      {headerSection.navLinks.map(({ title, icon, link }, index) => (
        <Link to={link} key={index}>
          <img src={icon} alt={title} />
          <p>{title}</p>
        </Link>
      ))}
    </>
  );
}
