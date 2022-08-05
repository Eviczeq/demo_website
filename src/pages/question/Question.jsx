import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: #efefef;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 20px;
`;
const Container = styled.div`
  background-color: white;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-bottom: 2rem;
`;
const Text = styled.div`
  
`
const Question = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Wrapper>
        <Title>火災保険のQ&A</Title>
        <Container>
          <Text>
          Q.保険会社が色々ありすぎて、どこで選べば良いのかわかりません。<br/>
          A.火災保険はどの保険会社で加入してもOkです。私たちが最適な火災保険をご提案いたします。
          </Text>
        </Container>
        <Container>
          <Text>
          Q.保険会社が色々ありすぎて、どこで選べば良いのかわかりません。<br/>
          A.火災保険はどの保険会社で加入してもOkです。私たちが最適な火災保険をご提案いたします。
          </Text>
        </Container>
        <Container>
          <Text>
          Q.保険会社が色々ありすぎて、どこで選べば良いのかわかりません。<br/>
          A.火災保険はどの保険会社で加入してもOkです。私たちが最適な火災保険をご提案いたします。
          </Text>
        </Container>
        <Container>
          <Text>
          Q.保険会社が色々ありすぎて、どこで選べば良いのかわかりません。<br/>
          A.火災保険はどの保険会社で加入してもOkです。私たちが最適な火災保険をご提案いたします。
          </Text>
        </Container>
      </Wrapper>
    </div>
  )
}

export default Question