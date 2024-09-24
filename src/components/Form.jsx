import React, { useState } from "react";
import styled from "@emotion/styled";

const Form = (props) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value.toUpperCase());
  };

  return (
    <form>
      <Input
        type="text"
        name="name"
        placeholder="영어로 입력해주세요💬"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">만들기</button>
      <Message>errorMessage</Message>
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

const Message = styled.p`
  margin: 20px;
  font-weight: bold;
  color: red;
`;

export default Form;
