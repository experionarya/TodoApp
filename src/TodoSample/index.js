import React, { useState } from "react";
import "../App.css";

const initialTodoItems = [
  { index: 1, value: "learn react", done: false },
  { index: 2, value: "learn angular", done: true },
  { index: 3, value: "learn html/css", done: true },
];

export default function TodoSample() {
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

  function onClickClose(index) {
    const removedIndex = parseInt(index);
    removeItem(removedIndex);
  }
  function onClickDone(index) {
    const markIndex = parseInt(index);
    markTodoDone(markIndex);
  }

  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (value) {
      addItem({ newItemValue: value });
      setValue("");
    }
  }

  return (
    <div id="main">
      <h1>Todo list</h1>
      {todoItems.map((item, index) => (
        <ul className="list-group" key={index}>
          <li className="list-group-item">
            <div className={`${item.done ? "done " : "undone "} ${item}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                style={{ marginRight: "5px" }}
                onClick={() => onClickDone(index)}
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              {item.value}
              <button
                type="button"
                className="close"
                onClick={() => onClickClose(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#666"
                  width="20"
                  height="20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      ))}

      <form onSubmit={handleSubmit} className="form-inline">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo..."
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    </div>
  );
}
