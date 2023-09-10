import React from 'react';
import { fetchTodo, addNewFetchTask, deleteTask } from '../../api/fetchTodo';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import TodoList from '../../components/TodoList/TodoList';
import InputComponent from '../../components/InputComponent/InputComponent';
import { Link } from 'react-router-dom';
import { sendNewTask } from '../../store/todoSlice';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import s from './MainComponentPage.module.scss';

const MainComponentPage: React.FC = () => {
  const [text, setText] = React.useState('');
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) => state.todo.list);
  const { loading, error } = useAppSelector((state) => state.todo);

  const addTask = () => {
    if (text.length > 1) {
      dispatch(addNewFetchTask(text));

      setText('');
    }
  };

  React.useEffect(() => {
    if (todo && todo.length === 0) {
      dispatch(fetchTodo());
    }
  }, [dispatch, todo]);

  //Функция удаления таски с главной страницы и переноса её в корзину;

  const sendAndRemove = (id: string) => {
    dispatch(sendNewTask(id));
    dispatch(deleteTask(id));
  };

  return (
    <>
      <section className={s.block}>
        <h1 className={s.title}>Today's tasks</h1>
        <InputComponent text={text} handleInput={setText} addTask={addTask} />
        <div>
          {loading && <h2 className={s.loading}>Loading...</h2>}
          {error && <h2 className={s.loading}>{error}</h2>}
        </div>
        <TodoList todo={todo} sendAndRemove={sendAndRemove} />
      </section>
      <section>
        <ButtonLink>
          <Link to="/trashbasket">
            <button className={s.button}>To trashbasket</button>
          </Link>
        </ButtonLink>
      </section>
    </>
  );
};

export default MainComponentPage;
