const baseURL = "https://e6xt2.sse.codesandbox.io";

export const getTodos = () => {
  return fetch(`${baseURL}/todos`).then((res) => res.json());
};

export const createTodo = async (payload) => {
  const { content, isDone } = payload;
  const res = await fetch(`${baseURL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content,
      isDone
    })
  });
  const data = await res.json();

  return data;
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();

  return data;
};

export const updateTodo = async (payload) => {
  const { id, content, isDone } = payload;
  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content,
      isDone
    })
  });
  const data = await res.json();

  return data;
};
