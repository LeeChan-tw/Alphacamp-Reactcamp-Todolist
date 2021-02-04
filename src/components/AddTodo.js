import React from "react";
import clsx from "clsx";
const AddTodo = ({
  handleKeyDownProp,
  handleAddProp,
  handleChangeProp,
  inputValueProp
}) => {
  return (
    <div className={clsx("add-todo", { active: inputValueProp })}>
      <label className="add-todo-icon icon" htmlFor="add-todo-input"></label>
      <div className="add-todo-input">
        <input
          id="add-todo-input"
          onChange={handleChangeProp}
          onKeyDown={handleKeyDownProp}
          value={inputValueProp}
          type="text"
          placeholder="新增工作"
        />
      </div>
      <div className="add-todo-action">
        <button className="btn-reset btn-add" onClick={handleAddProp}>
          {" "}
          新增{" "}
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
