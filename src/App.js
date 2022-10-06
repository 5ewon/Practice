import React, { useState } from 'react';
import styled from 'styled-components';


const App = () => {
  const [color, setColor] = useState("white");
  const ChangeColor = () => color==="red" ? setColor("white"):setColor("red");
  const Button = styled.button`
    color:black;
    background-color:${color};
    border-radius:10px;
    font-size:24px;
  `;
  const LargeButton = styled(Button)`
    font-size:40px;
  `;

  return (
    <div>
      <Button onClick={ChangeColor}>ing</Button>
      <LargeButton>iiing</LargeButton>
    </div>
  );
}

export default App;
