import React from "react";
import styled from "styled-components";
import { Draggable } from "./Draggable";

export const DropField = ({ fieldName, tasks, setTasks }) => {
  const handleDragOver = (e) => {
    const isText = event.dataTransfer.types.includes("text/plain");
    if (isText) {
      event.preventDefault();
    }
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("text/plain");
    const targetField = e.target.dataset.field;

    // update status from todo to completed
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === Number(id)) {
        task.status = targetField;
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <Drop
      data-field={fieldName}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {tasks.map(
        (task) =>
          task.status === fieldName && <Draggable key={task.id} task={task} />
      )}
    </Drop>
  );
};

const Drop = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
