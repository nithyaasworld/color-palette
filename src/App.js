import './App.css';
import { useState } from 'react';
import ColorBox from './ColorBox';

function App() {
  let boxes = [0.3, 0.4, 0.5, 0.7, 0.8, 1];
  let [boxColor, setBoxColor] = useState('yellow');
  let generateRandomColor = () => {
    setBoxColor('hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)');
  }
  return (
    <>
      <h1>Color Palette Generator</h1>
      <button className="generate-btn" onClick={generateRandomColor}>Generate</button>
      <div className={"box-container"}>
        {boxes.map((boxOpacity) => <ColorBox childboxColor={boxColor} childboxOpacity={boxOpacity}/>)}
      </div> 
    </>
  );
}

export default App;
