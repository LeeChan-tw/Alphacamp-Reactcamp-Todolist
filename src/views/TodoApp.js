import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Todos from "./../components/Todos";
import AddTodo from "./../components/AddTodo";
import { v4 as uuidv4 } from "uuid";
import { getTodos, createTodo, deleteTodo, updateTodo } from "./../api/todos";

const defaultTodos = [
  {
    id: uuidv4(),
    content: "Click the Button at right to open db server",
    isEdit: false,
    isDone: false
  },
  {
    id: uuidv4(),
    content: "hohoho click click click",
    isEdit: false,
    isDone: false
  }
];

export default function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  const numOfRemaining = todos.filter((todo) => !todo.isDone).length;

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.keyCode !== 13 || inputValue.trim().length === 0) {
      return;
    }
    const data = await createTodo({
      content: inputValue,
      isDone: false
    });

    setTodos((prevTodos) => {
      return [...prevTodos, data];
    });

    setInputValue("");
  };

  const handleAdd = async () => {
    if (inputValue.length === 0) {
      return;
    }
    const data = await createTodo({
      content: inputValue,
      isDone: false
    });
    setTodos((prevTodos) => {
      return [...prevTodos, data];
    });
    setInputValue("");
  };

  const handleDone = (id) => async () => {
    const currentTodo = todos.find((t) => t.id === id);
    await updateTodo({
      id,
      isDone: !currentTodo.isDone
    });
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => async () => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteAll = () => {
    try {
      todos.forEach(async (todo) => {
        if (todo.isDone) {
          await deleteTodo(todo.id);
        }
      });
      setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isDone));
    } catch (e) {
      console.log(e);
    }
  };

  const handleSave = async ({ id, content }) => {
    await updateTodo({
      id,
      content
    });
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          content,
          isEdit: false
        };
      });
    });
  };

  const updateIsEdit = ({ id, isEdit }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          isEdit
        };
      });
    });
  };

  return (
    <div className="app">
      {console.log("Render App")}
      <Header />
      <AddTodo
        handleAddProp={handleAdd}
        inputValueProp={inputValue}
        handleChangeProp={handleChange}
        handleKeyDownProp={handleKeyDown}
      />
      <Todos
        handleDeleteProp={handleDelete}
        handleDoneProp={handleDone}
        todosProp={todos}
        updateIsEditProp={updateIsEdit}
        handleSaveProp={handleSave}
      />
      <Footer
        handleDeleteAllProp={handleDeleteAll}
        numOfRemainingProp={numOfRemaining}
      />
    </div>
  );
}
