// libraries
import { type ChangeEvent, useState } from 'react';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';
// components
import type { Todo } from 'components/App';
import Checkbox from 'components/shared/Checkbox';
import ConfirmModal from 'components/shared/ConfirmModal';
// assets
import CloseIcon from 'assets/icons/close_icon.svg?react';

import clsx from 'clsx';

interface Props extends Todo {
  handleDeleteTodo: (todoId: Todo['id']) => void;
  handleCompleteTodo: (todoId: Todo['id']) => void;
}

const TodoItem = ({
  id, title, deadline, isCompleted, handleDeleteTodo, handleCompleteTodo,
}: Props) => {
  const [isChecked, setIsChecked] = useState<Todo['isCompleted']>(isCompleted);
  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState<boolean>(false);

  const handleDeleteConfirm = () => {
    setIsOpenDeleteConfirm(true);
  };

  const handleCheck = (e:ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setIsChecked(checked);
    handleCompleteTodo(id);
  };

  const handleCloseConfirmModal = () => {
    setIsOpenDeleteConfirm(false);
  };

  return (
    <li className="todo-item">
      <div className="todo-item-inner">
        <Checkbox checked={isChecked} onChange={handleCheck} />

        <div className="todo-item-info">
          <h3 className={clsx('todo-item-title', { 'todo-item-checked': isChecked })}>{title}</h3>
          {deadline && (
          <p className="todo-item-deadline">
            Дедлайн до
            {' '}
            {dayjs(deadline).locale('ru').format('D MMMM HH:mm')}
          </p>
          )}
        </div>
      </div>

      <button className="todo-item-button" onClick={handleDeleteConfirm}>
        <CloseIcon className="todo-item-icon" />
      </button>

      {isOpenDeleteConfirm && (
        <ConfirmModal
          description="Вы уверены, что хотите удалить тудушку?"
          onClose={handleCloseConfirmModal}
          onSuccess={() => handleDeleteTodo(id)}
          payload={id}
          title="Удалить тудушку?"
        />
      )}
    </li>
  );
};

export default TodoItem;
