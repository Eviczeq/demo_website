import React from 'react'
// import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
// import Banner from '../../components/banner/Banner';
// import { send } from 'emailjs-com'
import styled from 'styled-components';
import shake from '../../assets/shake.svg'
import Footer from '../../components/footer/Footer';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  overflow: hidden;
`;
const Image = styled.img`
  height: 100%;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  font-size: 30px;

`;
const Form = styled.form`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;  
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 14px;
  margin-top: 1rem;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 200px;
  font-size: 14px;
  resize: none;
  margin-top: 1rem;

`;
const Button = styled.button `
  margin-top: 1rem;
  width: 150px;
  height: 30px;
  color: white;
  background-color: crimson;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease;

  &:focus{
      outline: none;
  }
  &:hover{
      background-color: rgb(142, 0, 28);
  }
`;

const Inquire = () => {
  // const [toSend, setToSend] = useState({
  //   from_name: '',
  //   to_name: '',
  //   message: '',
  //   reply_to: '',
  // });
  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };

  // const [message, setMessage] = useState(false)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  //   send(
  //     'service_knx4uyl',
  //     'template_eq2m23f',
  //     toSend,
  //     'dIi-YRKl0C5ISDeIq'
  //   )
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //     })
  //     .catch((err) => {
  //       console.log('FAILED...', err);
  //     });
  //   setToSend({
  //     from_name: '',
  //     to_name: '',
  //     message: '',
  //     reply_to: '',
  //   })
  // }
  const test = (e) =>{
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Wrapper>
        <Left>
          <Image src={shake}/>
        </Left>
        <Right>
          <Title>お問い合わせ</Title>
          <Form 
          onSubmit={test}
            // onSubmit={handleSubmit}
          >
            <Input
              type="text"
              placeholder='氏名'
              name='from_name'
              // value={toSend.from_name}
              // onChange={handleChange}
            />
            <Input
              type="text"
              placeholder='住所'
              name='from_name'
              // value={toSend.from_name}
              // onChange={handleChange}
            />
            <Input
              type="text"
              placeholder='連絡先'
              name='from_name'
              // value={toSend.from_name}
              // onChange={handleChange}
            />
            <Input
              type="text"
              placeholder='連絡可能日時'
              name='from_name'
              // value={toSend.from_name}
              // onChange={handleChange}
            />
            <Input
              type="text"
              placeholder='築何年か？'
              name='from_name'
              // value={toSend.from_name}
              // onChange={handleChange}
            />
            <Input
              hidden
              type='text'
              name='to_name'
              placeholder='to name'
              // value={toSend.to_name}
              // onChange={handleChange}
            />
            <TextArea
              placeholder='メッセージ'
              // value={toSend.message}
              // onChange={handleChange}
              name='message'
            ></TextArea>


            <Button type='submit'>送信</Button>
            {/* {message && <span>sendReply</span>} */}
          </Form>
        </Right>
      </Wrapper>
      <Footer/>

    </div>
  )
}

export default Inquire