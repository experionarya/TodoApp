import React from "react";
import TodoListItem from "../TodoListItem";

export default function TodoList({ todoItems, removeItem, markTodoDone }) {
  const items = todoItems.map((item, index) => {
    return (
      <TodoListItem
        key={index}
        item={item}
        index={index}
        removeItem={removeItem}
        markTodoDone={markTodoDone}
      />
    );
  });
  return <ul className="list-group"> {items} </ul>;
}
