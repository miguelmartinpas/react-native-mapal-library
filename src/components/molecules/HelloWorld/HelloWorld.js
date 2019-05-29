import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: palevioletred;
`;

const HelloWorld = () => {
  return (
    <Container backgroundColor="papayawhip">
      <Title>Hello World</Title>
    </Container>
  );
};

export default HelloWorld;
