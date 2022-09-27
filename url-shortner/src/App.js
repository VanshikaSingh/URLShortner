import { useState } from 'react';
import './App.css';
import BackgroundAnimation from './BackgroundAnimation';
import InputShortner from './InputShortner';
import LinkResults from './LinkResults';
import History from './History';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  console.log(list, "list")
  return (
    <div className="container">
    <InputShortner setInputValue={setInputValue}/>
    <BackgroundAnimation/>
    <LinkResults inputValue={inputValue} setList={setList} list={list}/>
    <History list={list} />
    </div>
  );
}

export default App;
