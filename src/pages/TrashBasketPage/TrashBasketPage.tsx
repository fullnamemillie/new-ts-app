import React from 'react';
import { Link } from 'react-router-dom';
import TrashBasketList from '../../components/TrashBasketList/TrashBasketList';
import { useAppDispatch } from '../../hooks/hook';
import { removeTaskFromTrashList } from '../../store/todoSlice/todoSlice';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import s from './TrashBasketPage.module.scss';

const TrashBasketPage = () => {
  const dispatch = useAppDispatch();

  const removeFromTrashBasket = (id: string) => {
    dispatch(removeTaskFromTrashList(id));
  };

  return (
    <>
      <div className={s.block}>
        <h1 className={s.title}>Trash Basket</h1>
        <TrashBasketList removeFromTrashBasket={removeFromTrashBasket} />
      </div>
      <ButtonLink>
        <Link to="/">
          <button className={s.button}>To main page</button>
        </Link>
      </ButtonLink>
    </>
  );
};

export default TrashBasketPage;
