import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import s from './TodoList.module.scss';
import { Todo } from '../../types/types';

interface TodoProps {
  todo: Todo[];
  sendAndRemove: (id: string) => void;
}

const TodoList: React.FC<TodoProps> = ({ todo, sendAndRemove }) => {
  return (
    <ul className={s.list}>
      {todo.map((item) => (
        <TaskItem key={item.id} {...item} sendAndRemove={sendAndRemove} />
      ))}
    </ul>
  );
};

export default TodoList;
