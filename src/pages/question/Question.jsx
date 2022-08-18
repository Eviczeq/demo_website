import React from 'react'
import Footer from '../../components/footer/Footer';
// import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import QeustionComponent from '../../components/question/QeustionComponent';

const Question = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <QeustionComponent/>
      <Footer/>
    </div>
  )
}

export default Question