import React from 'react'
import styled from "@emotion/styled";

const MainCard = (props) => {

  const heartIcon = "💖";

  return (
    <Container>
      <img src="https://cataas.com/cat/18MD6byVC1yKGpXp/says/JavaScript" alt="Loading..." width="400" />
      <Button>{heartIcon}</Button>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: relative;
  left: -45px;
  bottom: 15px;
`

export default MainCard