import React from "react";
import PropTypes from "prop-types";

const TodoList = ({
  todos,
  handleClick,
  handleChange,
  handleKeyPress,
  val,
  handleReset,
  checked,
  handlechecked,
  handleResetModal,
}) => {
  //console.log(todos[0].content)
  const items = todos.length ? (
    todos.map((todo, index) => {
      return (
        <li className="todo__item" key={index}>
          <span className="todo__index">{index + 1}.</span>

          {/* complete todo*/}
          <div className="todo__complete">
            <input
              type="checkbox"
              defaultChecked={checked}
              onClick={e => handlechecked(index, e)}
              title="Check to Complete Todo"
            />
          </div>
          <span id={`todo__${index}`} className="todo__content">
            {todo.content}
          </span>
          <button className="todo__delete" onClick={() => handleClick(todo.id)}>
            {" "}
            del
          </button>
        </li>
      );
    })
  ) : (
    <li className="todo__item todo__item--none">
      {" "}
      You do not have any todo item
    </li>
  );

  return (
    <div className="todo">
      <ul className="todo__list">
        <li data-id="todo-input" className="todo__item">
          <label htmlFor="todo-input" className="todo__label">
            <span className="todo__required">*</span>New Todo
          </label>

          <input
            id="todo-input"
            className="todo__input"
            type="text"
            defaultValue={val}
            onChange={e => handleChange(e)}
            placeholder="Add New Todo"
            onKeyPress={e => handleKeyPress(e)}
          />
        </li>
      </ul>

      <ul data-list="list" className="todo__list">
        {items}
      </ul>
      <button id="todo-reset" className="todo__reset" onClick={ (e) =>handleResetModal(e)}>
        reset
      </button>

      <div id="reset-modal__container" className="modal__container">
      <div id="reset__modal" className="reset__modal">
        <p> Do you really wish to reset your todo list?</p>

        <div>
          <button onClick={handleReset} id="reset__yes" className="reset__modal--yes">
            yes
          </button>
          <button onClick={ (e) =>handleResetModal(e) } id="reset__no" className="reset__modal--no">
            No
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      val: PropTypes.bool.isRequired
    })
  )
};
