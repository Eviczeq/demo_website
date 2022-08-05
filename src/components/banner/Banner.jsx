import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
    height: 20vh;
    position: fixed;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
`
const Title = styled.button`
  font-size: 40px;
  padding: 20px;
  border-radius: 50px;
  &:hover{
    background-color: grey;

  }
  cursor: pointer;
  transition: all 0.5s ease;
`;
const LinkContainer = styled.a`
  text-decoration: none;
  color: black;
`
const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  const  logit = () => {
    setScrollY(window.pageYOffset);
    console.log(typeof scrollY)

  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);

    };
  });
  
  return (
    <Page style={{right: scrollY >400 ? "-999999999999999px" : "0px"}}>
      <Link to="/estimate">
      <Title  >
        <LinkContainer>10秒で火災保険の試算</LinkContainer>
        
      </Title>
      </Link>
      
           
    </Page>
  )
}

export default Banner