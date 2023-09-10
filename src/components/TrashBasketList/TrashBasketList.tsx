import React from 'react';
import TrashBasketTaskItem from '../TrashBasketTaskItem/TrashBasketTaskItem';
import { useAppSelector } from '../../hooks/hook';
import s from './TrashBasketList.module.scss';

interface TrashBasketListProps {
  removeFromTrashBasket: (id: string) => void;
}

const TrashBasketList: React.FC<TrashBasketListProps> = ({
  removeFromTrashBasket,
}) => {
  const trash = useAppSelector((state) => state.todo.trashBasketList);

  return (
    <ul className={s.list}>
      {trash.map((item) => (
        <TrashBasketTaskItem
          key={item.id}
          {...item}
          removeFromTrashBasket={removeFromTrashBasket}
        />
      ))}
    </ul>
  );
};

export default TrashBasketList;
