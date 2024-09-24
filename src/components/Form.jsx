import React, { useState } from "react";
import styled from "@emotion/styled";

const Form = (props) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

  // 유효성 검사
  const handleInputChange = (event) => {
    setErrorMessage("");
    if (includesHangul(event.target.value)) {
      setErrorMessage("⛔한글은 입력할 수 없어요❗❗");
    }
    setValue(event.target.value.toUpperCase());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (value === "") {
      setErrorMessage("😤뭐라도 입력해 주세요💢");
      return;
    }

    setValue("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="영어로 아무거나 입력해주세요...💬"
        value={value}
        onChange={handleInputChange}
      />
      <Button type="submit">만들기</Button>
      <Message>{errorMessage}</Message>
    </form>
  );
};

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ff6f61;
  border-radius: 20px;
  font-size: 16px;
  font-family: "LeeSeoyun", sans-serif;
  width: 300px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #ff3d3d;
  }

  &::placeholder {
    color: #ffb3b3;
    font-family: "LeeSeoyun", sans-serif;
  }
`;

const Button = styled.button`
  background-color: #ffe4e1; /* 연한 핑크색 */
  border: none;
  border-radius: 20px; /* 둥근 모서리 */
  padding: 15px 30px;
  font-size: 18px;
  color: #333; /* 어두운 글자색 */
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  font-family: "LeeSeoyun", sans-serif;

  &:hover {
    transform: scale(1.05); /* 마우스 오버 시 확대 효과 */
    background-color: #ffb6c1; /* 밝은 핑크색으로 변경 */
  }
`;

const Message = styled.p`
  margin: 20px;
  font-size: 18px;
  font-weight: bold;
  color: red;
`;

export default Form;
