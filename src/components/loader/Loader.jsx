import React from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader'
import welcomeLeft from '../../assets/welcomeLeft.png'
import welcomeRight from '../../assets/welcomeRight.png'
import { useEffect, useState } from 'react';
const Page = styled.div`
display: flex;
height: 100vh;
overflow: hidden;
justify-content: space-between;
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
flex-direction: column;
  display: flex;
  margin: auto;
  animation: ${scaleUp} 2s linear;
  animation-delay: 3s;
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
  background-color: red;
  padding: 20px;
  font-size: 50px;
  /* animation: ${dissapear} 1s linear ;  
  animation-fill-mode: forwards; */
  display: flex;
`
const Bottom = styled.div`
display: flex;
justify-content: center;
`

const Loading = styled.div`
font-size: 50px;
display: flex;
margin-left: auto;
margin-right: auto;
animation: ${dissapear} 3s linear ; 
animation-fill-mode: forwards;
`
const Left = styled.div`
  animation: ${dissapear} 3s linear ;  
  animation-fill-mode: forwards;
  display: flex;
  flex: 1;
`;
const LeftImageContainer = styled.div`
    position: relative;
  width: 100%;
`
const ImgLeft = styled.div`
background-image: url(${welcomeLeft});
  background-repeat: repeat-y;
  width:100%;  
  height:100%;  
  position:absolute;
  background-position-x: left; 
  background-position-y: ${props => props.seconds*5 + 'px'};
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

`;
const Right = styled.div`
  animation: ${dissapear} 3s linear ;  
  animation-fill-mode: forwards;
  display: flex;
  flex: 1;
  

`;
const RightImageContainer = styled.div`
  position: relative;
  width: 100%;
`
const ImgRight = styled.div`
  background-image: url(${welcomeRight});
  background-repeat: repeat-y;
  width:100%;  
  height:100%;  
  position:absolute;
  background-position-x: right; 
  background-position-y: ${props => '-'+props.seconds*5 + 'px'};
`
const Loader = () => {
  const [seconds, setSeconds] = useState(1);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    let interval = null;
      if (isActive) {
          setIsActive(true)

      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 100);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);



  return (
    <Page>
      <Left>
        <LeftImageContainer>
          <ImgLeft seconds={seconds} />
        </LeftImageContainer>
        
      </Left>
      <Center>
        <Title>
          <Text>
            ダミーロゴ
          </Text>
        <Loading>
          Loading<PulseLoader style={{"alignItems": "end"}} />
        </Loading>
        </Title>
        <Bottom>
          ©2022
        </Bottom>
      </Center>
      <Right>
        <RightImageContainer>
          <ImgRight seconds={seconds} />
        </RightImageContainer>
      </Right>

      
    </Page>
  )
}

export default Loader