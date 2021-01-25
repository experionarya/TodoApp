import React from "react";

export default function TodoListItem({
  item,
  removeItem,
  index,
  markTodoDone,
}) {
  function onClickClose() {
    const removedIndex = parseInt(index);
    removeItem(removedIndex);
  }
  function onClickDone() {
    const markIndex = parseInt(index);
    markTodoDone(markIndex);
  }
  const todoClass = item.done ? "done" : "undone";
  return (
    <li className="list-group-item">
      <div className={`${todoClass} item`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width="20"
          height="20"
          style={{ marginRight: "5px" }}
          onClick={onClickDone}
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        {item.value}
        <button type="button" className="close" onClick={onClickClose}>
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
  );
}
