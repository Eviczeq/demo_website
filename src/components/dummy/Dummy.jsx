import React from 'react'
import styled from 'styled-components';

const Page = styled.div`
    height: 100vh;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
  font-size: 50px;
`
const dummy = () => {
  return (
    <Page>
      <Title>
        ダミーページ１
      </Title>
           
    </Page>
  )
}

export default dummy