import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import FullPageLayout from '../../shared-components/FullPageLayout';

import Me from '../../assets/Me.png';

import './Introduction.scss';

function Introduction() {
  const BLOCK = 'introduction'
  return (
    <FullPageLayout BLOCK={BLOCK}>
      <div className="flex">
        <div>
          <h5>Hello, I'm</h5>
          <h1>Saeed Ghiasi</h1>
          <h5>Front-End Developer | HR Enthusiast</h5>
          
        </div>

        <div>
        </div>

        <div className={`${BLOCK}__socials`}>
          <a href="https://www.linkedin.com/in/saeed-ghiasi/" target="__blank"><BsLinkedin /></a>
          <a href="https://github.com/Saeed-Ghiasi" target="_blank"><BsGithub /></a>
          <a href="https://saeedghiasi.t@gmail.com" target="_blank"><MdEmail /></a>
        </div>

        <div className={`${BLOCK}__imageArea`}>
          <img className={`${BLOCK}__img`} src={Me} alt="Me!" />
        </div>

        <a href="#skills" className={`${BLOCK}__scroll`}>Scroll Down</a>
      </div>
    </FullPageLayout>
  )
}

export default Introduction;