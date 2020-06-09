import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

class NavListItem {
  constructor(path, text) {
    this.path = path;
    this.text = text;
  }
}

const Nav = (props) => {
  const navList = [new NavListItem('/', 'Home'), new NavListItem('/gallery', 'Gallery')];

  return (
    <nav>
      <ul className="navigation">
        {navList.length &&
          navList.map(({ path, text }) => (
            <li key={text}>
              <NavLink to={path}>{text}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
