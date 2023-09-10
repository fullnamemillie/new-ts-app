import React from 'react';
import s from './ButtonLink.module.scss';

interface ButtonLinkProps {
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ children }) => {
  return (
    <>
      <section className={s.block}>{children}</section>
    </>
  );
};

export default ButtonLink;
