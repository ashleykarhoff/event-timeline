import React, { useState } from "react";
import styled from "styled-components";
import { Timeline } from "./Timeline";

export const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "dishes", status: "todo" },
    { id: 2, description: "hang shelves", status: "todo" },
    { id: 3, description: "assemble tv console", status: "completed" },
    { id: 4, description: "mount tv", status: "completed" },
  ]);

  return (
    <Wrapper>
      <PageTitle>My React App</PageTitle>
      <Timeline tasks={tasks} setTasks={setTasks} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const PageTitle = styled.h1``;
