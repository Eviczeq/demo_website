import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import topMovie from '../../assets/topMovie.mp4'

const Page = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
display: flex;
  font-size: 50px;
  color: black;
  width: 100%;
  text-align: center;
  margin: 0;
  justify-content: center;
  align-items: center;
`
const Video = styled.video`
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
`;
const Container = styled.div`
  display: flex;
  flex: 2;

`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 20px;
  background-color: #ffdde4;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  cursor: pointer;
  :hover{
    background-color: red;
  }
  transition: all 0.5s ease;
`
const dummy = () => {
  return (
    <Page>
      <Container>
        <Title>
        ダミーテキスト
        </Title>
        
      </Container>
      <LinkContainer>
        <Link to='/estimate' style={{textDecoration: 'none', color:'black'}}>
        10秒で火災保険の試算
        </Link>
      </LinkContainer>
      

      <Video
        autoPlay 
        muted
        loop
       >
        <source src={topMovie} type="video/mp4" />

      </Video>           
    </Page>
  )
}

export default dummy