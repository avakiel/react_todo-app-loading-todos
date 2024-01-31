/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import classNames from 'classnames';
import { Filter } from '../types/enum';
import { TodoContext } from '../TodoContext';
import { TodoContextProps } from '../types/interfaces';

export const TodoFooter = () => {
  const { state, setState } = useContext(TodoContext) as TodoContextProps;

  const itemsLeft = state.todos.filter(todo => !todo.completed).length;

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${itemsLeft} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link',
            { selected: state.filter === Filter.All })}
          data-cy="FilterLinkAll"
          onClick={() => setState(prev => ({
            ...prev,
            filter: Filter.All,
          }))}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link',
            { selected: state.filter === Filter.Active })}
          data-cy="FilterLinkActive"
          onClick={() => setState(prev => ({
            ...prev,
            filter: Filter.Active,
          }))}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link',
            { selected: state.filter === Filter.Completed })}
          data-cy="FilterLinkCompleted"
          onClick={() => setState(prev => ({
            ...prev,
            filter: Filter.Completed,
          }))}
        >
          Completed
        </a>
      </nav>
      {/* don't show this button if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};