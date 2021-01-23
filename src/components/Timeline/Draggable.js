import React from "react";
import styled from "styled-components";

const DraggableHandle = () => {
  return <Handle data-handle="true" />;
};

export const Draggable = ({ task }) => {
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("text/plain", taskId);
  };

  return (
    <ItemContainer>
      <DraggableHandle />
      <Item
        draggable={true}
        onDragStart={(e) => handleDragStart(e, task.id)}
        onDragEnd={() => console.log("drag end")}
      >
        {task.description}
      </Item>
      <DraggableHandle />
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px;
  background-color: orange;
  cursor: grab;
`;

const Item = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 16px;
  background-color: orange;
  color: white;
`;

const Handle = styled.span`
  width: 15px;
  height: 100%;
  border: 1px solid white;
`;
