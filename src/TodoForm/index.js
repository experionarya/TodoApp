import React, { useState } from "react";

export default function TodoForm({ addItem }) {
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
  );
}
