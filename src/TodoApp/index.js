import React, { useState } from "react";
import "../App.css";
import TodoHeader from "../TodoHeader";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";

const initialTodoItems = [
  { index: 1, value: "learn react", done: false },
  { index: 2, value: "Go shopping", done: true },
  { index: 3, value: "buy flowers", done: true },
];

export default function TodoApp() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  function addItem(todoItem) {
    const newItems = todoItems.concat({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false,
    });
    setTodoItems(newItems);
  }

  function removeItem(itemIndex) {
    const items = [...todoItems];
    items.splice(itemIndex, 1);
    setTodoItems(items);
  }

  function markTodoDone(itemIndex) {
    const todo = todoItems[itemIndex];
    const markedItems = [...todoItems];
    markedItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? markedItems.push(todo) : markedItems.unshift(todo);
    setTodoItems(markedItems);
  }

  return (
    <div id="main">
      <TodoHeader />
      <TodoList
        todoItems={todoItems}
        removeItem={removeItem}
        markTodoDone={markTodoDone}
      />
      <TodoForm addItem={addItem} />
    </div>
  );
}
