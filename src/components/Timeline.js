import React, { useState } from "react";
import styled from "styled-components";
import { DropField } from "./Timeline/DropField";

export const Timeline = ({ tasks, setTasks }) => {
  const [isSliding, setIsSliding] = useState(false);

  const handleMouseDown = (e) => {
    if (e.target.dataset.handle) {
      setIsSliding(true);
      const horizontalMousePosition = event.clientX;
      console.log(horizontalMousePosition);
    }
  };
  const handleMouseUp = (e) => {
    if (isSliding) {
      const horizontalMousePosition = event.clientX;
      console.log(horizontalMousePosition);
      setIsSliding(false);
    }
  };

  return (
    <Container onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
      <DropField fieldName="todo" tasks={tasks} setTasks={setTasks} />
      <DropField fieldName="completed" tasks={tasks} setTasks={setTasks} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
