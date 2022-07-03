import React, { useState } from 'react';

import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';
import { BiSelectMultiple } from 'react-icons/bi';


import './Nav.scss';

function Nav() {
  const [active, setActive] = useState(1);
 
  return (
    <div className="nav">
      <a href="#introduction" className={active === 1 && 'active'} onClick={() => setActive(1)}><AiOutlineHome /></a>
      <a href="#about" className={active === 2 && 'active'} onClick={() => setActive(2)}><BsPerson /></a>
      <a href="#experiences" className={active === 3 && 'active'} onClick={() => setActive(3)}><MdWorkOutline /></a>
      <a href="#skills" className={active === 4 && 'active'} onClick={() => setActive(4)}><BiSelectMultiple /></a>
    </div>
  )
}

export default Nav;