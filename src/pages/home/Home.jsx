import React from 'react'
// import Header from '../../components/header/Header';
import Dummy from '../../components/dummy/Dummy';
import Dummy2 from '../../components/dummy2/Dummy2';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (<div>
            {/* <Header /> */}
            <Navbar />
            <Banner/>
            <Dummy />
            <Dummy2 />
            <Footer/>
        </div>
          )
}

export default Home