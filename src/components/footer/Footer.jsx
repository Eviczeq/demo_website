import {Page, AllRightContainer,AllRightText,Hyperlink,ImgContainer ,PhoneItem,LogoImg, Container,Left,Logo,Description,SocialContainer,SocialIcon, Center,Right, Title, List, ListItem, ContactItem, Line, } from "./footer-style";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import myImage from '../../assets/logo.png';
import line from '../../assets/line.png';

const Footer = () => {
  return (
    <Page>

   
    <Container>
        <Left> 
            <Logo>
               <ImgContainer>
                    <LogoImg src={myImage}/>
                </ImgContainer> 
                火災保険
            </Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda ipsam expedita? Beatae, possimus excepturi. 
            </Description>
            <SocialContainer>
                <SocialIcon color="#4267B2">
                    <Hyperlink href="#">
                        <FacebookIcon/>
                    </Hyperlink>
                </SocialIcon>
                <SocialIcon color="#C13584">
                    <Hyperlink href="#">
                        <InstagramIcon/>
                    </Hyperlink>
                </SocialIcon>
                <SocialIcon color="#1DA1F2">
                    <Hyperlink href="#">
                        <TwitterIcon/>
                    </Hyperlink>
                </SocialIcon>
                <SocialIcon color="#06c755">
                    <Hyperlink href="#">
                        <Line src={line}/>
                    </Hyperlink>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Top</ListItem>
                <ListItem>会社案内</ListItem>
                <ListItem>火災保険Q＆A</ListItem>
                <ListItem>火災保険試算</ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem
                href="https://www.google.com/maps/place/Tokyo/"
                target="_blank"
                rel="noopener"
                primary
            >
                <RoomIcon style={{marginRight:"10px"}} />住所
                
            </ContactItem>
            <PhoneItem href="tel://"><PhoneIcon style={{marginRight:"10px"}}/>電話番号</PhoneItem>
            <ContactItem><MailOutlineIcon style={{marginRight:"10px"}}/>email</ContactItem>
        </Right>
        </Container> 
        <AllRightContainer>
            <AllRightText>
                ©2022火災保険All Rights Reserved.
            </AllRightText>
        </AllRightContainer>
    </Page>  )
}

export default Footer