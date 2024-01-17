import React from 'react';
import Slider from './Components/Slider'
import './App.css';

export default function App() {
  const elem = [{ key: 1, color: "1" },
  { key: 2, color: "2" },
  { key: 3, color: "3" },
  { key: 4, color: "4" },
  { key: 5, color: "5" },
  { key: 6, color: "6" }]
  return (
    <div>
      <h1>Hello world!</h1>
      <Slider elements={elem}/>
    </div>
  );
}
