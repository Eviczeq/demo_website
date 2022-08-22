import React from 'react'
import styled from 'styled-components'
import qAndA from '../../assets/qanda.webp'
const Container = styled.div`
    background: no-repeat  url(${qAndA});
    background-size: contain;
    height: 1200px;
    flex-direction: column;
        display: flex;
        align-items: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 50%;
    background-color: #eaeaead4;
    border-radius: 15px;
    margin-bottom: 15px;
    :hover{
      transform: scale(1.1);
      font-weight: bold;
    }
    transition: all 1s ease;
`;
const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: red;
`;
const Answer = styled.p`
  font-size: 15px;
  
`
const Question = styled.p`
  font-size: 15px;

`
const QeustionComponent = () => {
  return (
    <Container>
          <Title>火災保険Q＆A</Title>
        <Wrapper >
            <Question>Q.保険会社が色々ありすぎて、どこで選べば良いのかわかりません。</Question>
            <Answer>A.火災保険はどの保険会社で加入してもOkです。私たちが最適な火災保険をご提案いたします。</Answer>
        </Wrapper>
        <Wrapper >
            <Question>Q.保険会社が色々ありすぎて、どこで選べば良いのかわかりません。</Question>
            <Answer>A.火災保険はどの保険会社で加入してもOkです。私たちが最適な火災保険をご提案いたします。</Answer>
        </Wrapper>
        <Wrapper >
            <Question>Q.保険会社が色々ありすぎて、どこで選べば良いのかわかりません。</Question>
            <Answer>A.火災保険はどの保険会社で加入してもOkです。私たちが最適な火災保険をご提案いたします。</Answer>
        </Wrapper>
        <Wrapper >
            <Question>Q.保険会社が色々ありすぎて、どこで選べば良いのかわかりません。</Question>
            <Answer>A.火災保険はどの保険会社で加入してもOkです。私たちが最適な火災保険をご提案いたします。</Answer>
        </Wrapper>

</Container>
  )
}

export default QeustionComponent