import React from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader'
const Page = styled.div`
display: flex;
flex-direction: column;
margin-top: 20%;
`
const scaleUp = keyframes`
  from {
    transform: scale(1)
  }
  to{
    transform: scale(6);
  }
`
const Title = styled.div`
  display: flex;
  background-color: red;
  padding: 20px;
  margin: auto;
  animation: ${scaleUp} 2s linear;
  animation-delay: 1s;
  animation-fill-mode: forwards;


  `
const dissapear = keyframes`
  from {
  opacity:1; 
  }

  to {
    opacity:0;
  }
`;
const Text = styled.h1`
  font-size: 50px;
  animation: ${dissapear} 1s linear ;  
  animation-fill-mode: forwards;

`
const Bottom = styled.div`
display: flex;
bottom: 0px;
left: 49%;
font-size: 20px;
position: absolute;
`

const Loading = styled.div`
font-size: 50px;
display: flex;
margin-left: auto;
margin-right: auto;
animation: ${dissapear} 1s linear ; 
animation-fill-mode: forwards;


`
const loader = () => {
  return (
    <Page>
      <Title>
        <Text>
          ダミーロゴ
        </Text>

      </Title>
      <Loading>
        Loading<PulseLoader style={{"alignItems": "end"}} />
      </Loading>
      <Bottom>
        ©2022
      </Bottom>
    </Page>
  )
}

export default loader