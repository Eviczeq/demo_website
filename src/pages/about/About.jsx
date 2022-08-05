import React from 'react'
import Header from '../../components/header/Header';
import Test from '../../assets/Picture1.png'
import Navbar from '../../components/navbar/Navbar';

import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

`;
const Img = styled.img`
display: block;
  margin: auto;
  width: 50%;
`
const About = () => {
  return (
    <div>            
      <Header />
      <Navbar />
      <Wrapper>
        <Img src={Test}/>
      </Wrapper>
    </div>
  )
}

export default About