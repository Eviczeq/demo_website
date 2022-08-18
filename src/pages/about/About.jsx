import React from 'react'
// import Header from '../../components/header/Header';
import Test from '../../assets/Picture1.png'
import Navbar from '../../components/navbar/Navbar';

import styled from 'styled-components';
import Footer from '../../components/footer/Footer';
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
    <div style={{display:'flex', flexDirection:'column'}}>            
      {/* <Header /> */}
      <Navbar />
      <Wrapper>
        <Img src={Test}/>
      </Wrapper>
      <Footer/>
    </div>
  )
}

export default About