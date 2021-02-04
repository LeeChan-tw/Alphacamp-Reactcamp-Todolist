import React, { useState } from "react";
import clsx from "clsx";

const TodoItem = ({
  todo,
  handleSaveProp,
  handleDoneProp,
  handleDeleteProp,
  updateIsEditProp
}) => {
  const [tempTodo, setTempTodo] = useState(todo.content);

  const handleChange = (e) => {
    setTempTodo(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && tempTodo.trim().length) {
      handleSaveProp({ id: todo.id, content: tempTodo });
    }
    if (e.keyCode === 27) {
      updateIsEditProp({
        id: todo.id,
        isEdit: false
      });
      setTempTodo(todo.content);
    }
  };

  const { isEdit, isDone, id, content } = todo;
  return (
    <div className={clsx("task-item", { done: isDone, edit: isEdit })}>
      <div className="task-item-checked" onClick={handleDoneProp(id)}>
        <span className="icon icon-checked"></span>
      </div>
      <div
        className="task-item-body"
        onDoubleClick={() => updateIsEditProp({ id, isEdit: true })}
      >
        <span className="task-item-body-text">{content}</span>
        <input
          className="task-item-body-input"
          type="text"
          placeholder="新增工作"
          onChange={handleChange}
          value={tempTodo}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="task-item-action" onClick={handleDeleteProp(id)}>
        <button className="btn-reset btn-destroy icon"> </button>
      </div>
    </div>
  );
};

export default TodoItem;
