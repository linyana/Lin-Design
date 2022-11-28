import React from 'react';

import { NavLink } from 'react-router-dom';

const HeaderNavLink = (props: any) => {
  return (
    <NavLink {...props} className={({ isActive }) => "nav" + (isActive ? " nav_on" : "")}></NavLink>
  )
}

export default HeaderNavLink