import React from 'react';
import s from './InputComponent.module.scss';
import { useRef } from 'react';

interface InputComponentProps {
  text: string;
  handleInput: (string: string) => void;
  addTask: () => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  text,
  handleInput,
  addTask,
}) => {
  const focusRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  const onEnterAddTask: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className={s.block}>
      <input
        className={s.input}
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        ref={focusRef}
        onKeyDown={onEnterAddTask}
      />
      <button onClick={addTask} className={s.button}>
        Add task
      </button>
    </div>
  );
};

export default InputComponent;
