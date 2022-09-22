import { useState } from 'react';
import './App.css';
import BackgroundAnimation from './BackgroundAnimation';
import InputShortner from './InputShortner';
import LinkResults from './LinkResults';

function App() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="container">
    <InputShortner setInputValue={setInputValue}/>
    <BackgroundAnimation/>
    <LinkResults inputValue={inputValue}/>
    </div>
  );
}

export default App;
