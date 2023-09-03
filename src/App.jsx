import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [text, setText] = useState('1');
  return (
    <>
      <input value={text} onChange={() => setText(text)} type="text" />
      <h1>{text ? text : 'Empty'}</h1>
    </>
  );
}

export default App;
