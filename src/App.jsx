import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MainCard from "./components/MainCard";
import { fetchCat } from "./axios/api";

function App() {
  const [count, setCount] = useState(null);
  const countTitle = count === null ? "" : count + "번째";
  const [cat, setCat] = useState(
    "https://cataas.com/cat/18MD6byVC1yKGpXp/says/JavaScript"
  );

  // 데이터 READ
  const firstCat = async () => {
    const newCat = await fetchCat();
    setCat(newCat);
    console.log('mainCat', cat)
  }

  useEffect(() => {
    firstCat();
  }, [])

  return (
    <>
      <Header>
        꽁꽁 얼어붙은 한강 위로
        <br />
        {countTitle} 고양이가 걸어다닙니다
      </Header>
      <Form />
      <MainCard image={cat} />
    </>
  );
}

export default App;
