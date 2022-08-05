import styled from 'styled-components';
import {subBackColor} from '../../global-style'
import {mobile} from '../../responsive'

export const Container = styled.div`

display: flex;
  height: 5rem;
  background-color: ${subBackColor};
  ${mobile({ 
    height: "50px"
  })}
`;
export const Wrapper = styled.div`

  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ 
    padding: "10px 0px"
  })}
`;

export const LanguageIconContainer = styled.div`
    ${mobile({ 
    display: "none"
  })}
`
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 5px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  ${mobile({ 
    display: "none"
  })}
`;
export const Center = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  ${mobile({ 
    fontSize: "14px",
    justifyContent:"flex-end",
  })}
`;
export const Logo = styled.h1`
color: red;
  font-weight: bold;
  ${mobile({ 
    fontSize: "10px"
  })}
  
`;
export const LogoImg = styled.img`
  width: 10%;
  margin-right: 20px;
  ${mobile({ 
    width: "30%",
    margin: "0 5px",

  })}
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ 
    paddingRight: "10px",
    flex: "2"
  })}
  
`;
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-transform: uppercase;
  ${mobile({ 
    fontSize: "10px",
    marginLeft: "10px"
  })}
`;