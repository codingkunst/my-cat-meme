import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form';
import MainCard from './components/MainCard';

function App() {

  const [count, setCount] = useState(1);
  const countTitle = count === null ? "" : count + "번째";
  const [mainCat, setMainCat] = useState("https://i.sstatic.net/xcGlN.png");


  return (
    <>
      <Header>꽁꽁 얼어붙은 한강 위로<br />{countTitle} 고양이가 걸어다닙니다</Header>
      <Form />
      <MainCard />
    </>
  )
}

export default App
