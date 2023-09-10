import React from 'react';
import { PiTrash } from 'react-icons/pi';
import s from './TrashBasketTaskItem.module.scss';

interface TrashBasketTaskItemProps {
  id: string;
  title: string;
  removeFromTrashBasket: (id: string) => void;
}

const TrashBasketTaskItem: React.FC<TrashBasketTaskItemProps> = ({
  title,
  id,
  removeFromTrashBasket,
}) => {
  return (
    <section className={s.block}>
      <div>
        <li key={id}>
          <p className={s.title}>{title[0].toUpperCase() + title.slice(1)}</p>
          <button onClick={() => removeFromTrashBasket(id)}>
            <PiTrash />
          </button>
        </li>
      </div>
    </section>
  );
};

export default TrashBasketTaskItem;
