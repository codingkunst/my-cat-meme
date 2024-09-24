import React from "react";
import styled from "@emotion/styled";

const MainCard = (props) => {
  const apiUrl = import.meta.env.VITE_SERVER_URL;
  console.log("API URL:", apiUrl);

  const heartIcon = "💖";

  return (
    <Container>
      <img
        src={props.image}
        alt="Loading..."
        width="400"
        height="400"
      />
      <Button>{heartIcon}</Button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: relative;
  left: -45px;
  bottom: 15px;
  cursor: pointer;
`;

export default MainCard;