import React from 'react';
import s from './Header.module.scss';

const Header: React.FC = () => {
  const image =
    'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/36-512.png';

  return (
    <div className={s.block}>
      <img className={s.image} src={image} alt="color" />
      <p className={s.title}>Todo Application</p>
    </div>
  );
};

export default Header;
