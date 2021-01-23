import React, { useState } from "react";
import styled from "styled-components";

export const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "dishes", status: "todo" },
    { id: 2, description: "hang shelves", status: "todo" },
    { id: 3, description: "assemble tv console", status: "completed" },
    { id: 4, description: "mount tv", status: "completed" },
  ]);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("text/plain", taskId);
  };

  const handleDragOver = (e) => {
    const isText = event.dataTransfer.types.includes("text/plain");
    if (isText) {
      event.preventDefault();
    }
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("text/plain");
    const targetDropBucket = e.target.dataset.bucket;

    // update status from todo to completed
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === Number(id)) {
        task.status = targetDropBucket;
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <Wrapper>
      <PageTitle>My React App</PageTitle>
      <Draggable>
        <DropBucket
          data-bucket="todo"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {tasks.map(
            (task) =>
              task.status === "todo" && (
                <Item
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  onDragEnd={() => console.log("drag end")}
                >
                  {task.description}
                </Item>
              )
          )}
        </DropBucket>
        <DropBucket
          data-bucket="completed"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {tasks.map(
            (task) =>
              task.status === "completed" && (
                <Item
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  onDragEnd={() => console.log("drag end")}
                >
                  {task.description}
                </Item>
              )
          )}
        </DropBucket>
      </Draggable>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const PageTitle = styled.h1``;
const Draggable = styled.div`
  display: flex;
  flex-direction: row;
`;
const Item = styled.div`
  margin: 8px;
  padding: 16px;
  background-color: orange;
  color: white;
`;

const DropBucket = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
