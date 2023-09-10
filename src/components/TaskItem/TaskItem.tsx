import React from 'react';
import { toggleTaskCompleted } from '../../api/fetchTodo';
import { useAppDispatch } from '../../hooks/hook';
import { PiTrash } from 'react-icons/pi';
import s from './TaskItem.module.scss';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  sendAndRemove: (id: string) => void;
}

const TaskItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  sendAndRemove,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.block}>
      <div>
        <li key={id}>
          <input
            className={s.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => dispatch(toggleTaskCompleted(id))}
          />
          <p className={s.title}>{title[0].toUpperCase() + title.slice(1)}</p>
          <button onClick={() => sendAndRemove(id)}>
            <PiTrash />
          </button>
        </li>
      </div>
    </div>
  );
};

export default TaskItem;
