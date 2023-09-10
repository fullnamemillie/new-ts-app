import React from 'react';
import s from './Header.module.scss';
import { image } from '../../images/image';

const Header: React.FC = () => {
  return (
    <div className={s.block}>
      <img className={s.image} src={image} alt="color" />
      <p className={s.title}>Todo Application</p>
    </div>
  );
};

export default Header;
