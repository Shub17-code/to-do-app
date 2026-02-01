import { useState } from "react";
import { CustomErrorAlert } from "../utils/general.js";

const API_URL = import.meta.env.VITE_API_URL;

const useUpdateTodo = (setTodos) => {
  const [updatingTodoId, setUpdatingTodoId] = useState(null);

  const updateTodo = async (id, payload) => {
    try {
      setUpdatingTodoId(id);

      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }
      const data = await response.json();
      console.log("UPDATE RESPONSE:", data);

      const updatedTodo = data.todo;

      setTodos((prev) =>
        prev.map((t) => (t._id === updatedTodo._id ? updatedTodo : t)),
      );
    } catch (error) {
      CustomErrorAlert(error);
    } finally {
      setUpdatingTodoId(null);
    }
  };

  return { updateTodo, updatingTodoId };
};

export default useUpdateTodo;
