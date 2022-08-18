import styled from 'styled-components';
import {subBackColor} from '../../global-style' 
import { mobile } from '../../responsive';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${subBackColor};
    ${mobile({ 
    flexDirection: "column"
  })}
    
`;
export const Left = styled.div`
    flex: 1;
    padding: 20px;
    height: 100%;
`;
export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.17rem;
    font-weight: bold;
`;
export const ImgContainer = styled.div`
    display: contents;
`;
export const LogoImg = styled.img`
  width: 10%;
  margin-right: 10px;
`;
export const Description = styled.p`
    margin: 20px 0px;
`;
export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    :hover{
        transform: scale(1.1);
    }
    transition: all 0.5s ease;
`;
export const Hyperlink  = styled.a`
    text-decoration:  none;
    color: inherit;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;
export const Center = styled.div`
    flex: 1;
    padding: 20px;
    height: 100%;
    ${mobile({ 
    display: "none"
  })}

`;
export const Title = styled.h3`
    margin-bottom: 30px;
    text-align: center;
`;
export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    :hover{
        color: red;
    }
    transition: all 0.2s ease;
`;

export const Right = styled.div`
    flex: 1;
    padding: 20px;
    height: 100%;

`;
export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    cursor: pointer;
    :hover{
        color: red;
    }
    transition: all 0.2s ease;

`;
export const PhoneItem = styled.a`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    cursor: pointer;
    :hover{
        color: red;
    }
    transition: all 0.2s ease;
    
`;

export const Payment = styled.img`
    width: 50%;
    ${mobile({ 
    width: "100%",
  })}
`;

export const Line = styled.img`
    width: 80%;
    ${mobile({ 
    width: "100%",
  })}
`;
export const Page = styled.div`
    
`
export const AllRightContainer= styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: red;
`
export const AllRightText= styled.h4`

`