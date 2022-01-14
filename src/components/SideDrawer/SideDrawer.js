import React from 'react'
import {Link} from 'react-router-dom';

import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    const close = () => {
      const drawer = document.querySelector('.side-drawer');
      drawer.classList.remove('open');
      props.close();
    }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" onClick={close}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={close}>About Us</Link>
        </li>
        <li>
          <Link to="/projects" onClick={close}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={close}>Contact</Link>
        </li>
        <li>
          <Link to="/apply" onClick={close}>Apply</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer;