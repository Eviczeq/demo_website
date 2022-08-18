import React from 'react'
import styled from 'styled-components';
import hoken1 from '../../assets/hoken1.webp';
import hoken2 from '../../assets/hoken2.webp';
import hoken3 from '../../assets/hoken3.webp';
import Slider from "react-slick";


// ADD CAROUSEL CHOSE LIBRARY https://alvarotrigo.com/blog/react-carousels/ 
// LATER ADD INFORMATION TO NEW FILE AND MAP OVER IT 
//MOVE STYLES TO THE SEPERATE FILE

const PageTest = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  
`;
const TitleTest = styled.h1`
  font-size: 50px;
`
const ContainerTest = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;


`;
const Card= styled.div`
  width: 250px;
  height: 70%;
  border-radius: 10px;
  box-shadow: 0px 0px 15px -8px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  transition: all 1s ease;
  margin: 0 10px;
  :hover{
      transform: scale(1.1);
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CenterTest = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: #ffdde4;
  text-align: center;
`;
const Img = styled.img`
    width: 80%;
    object-fit: cover;
    border-radius: 15px;
`;
const BottomTest = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Text = styled.h4`
  font-size: 15px;
`
const dummy = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <PageTest>
    <TitleTest>ダミータイトル</TitleTest>
    <ContainerTest> 
    {/* <Slider {...settings}>      */}
      <Card>
        <Top>
          <Img src={hoken1}  />
        </Top>
        <CenterTest>
          ダミータイトル
        </CenterTest>
        <BottomTest>
            <Text>

               ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト
            </Text>          
        </BottomTest>
      </Card>
      <Card>
        <Top>
          <Img src={hoken2}  />
        </Top>
        <CenterTest>
          ダミータイトル
        </CenterTest>
        <BottomTest>
            <Text>
            ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト
            </Text>          
        </BottomTest>
      </Card>
      <Card>
        <Top>
          <Img src={hoken3}  />
        </Top>
        <CenterTest>
        ダミータイトル
        </CenterTest>
        <BottomTest>
            <Text>
            ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト
            </Text>          
        </BottomTest>
      </Card>
      <Card>
        <Top>
          <Img src={hoken1}  />
        </Top>
        <CenterTest>
        ダミータイトル
        </CenterTest>
        <BottomTest>
            <Text>
            ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト
            </Text>          
        </BottomTest>
      </Card>
            <Card>
        <Top>
          <Img src={hoken1}  />
        </Top>
        <CenterTest>
        ダミータイトル
        </CenterTest>
        <BottomTest>
            <Text>
            ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト ダミーテキスト
            </Text>          
        </BottomTest>
      </Card>
      {/* </Slider > */}
    </ContainerTest>
  </PageTest>
  )
}

export default dummy