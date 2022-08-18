import React from "react";

import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { json } from "./json"
// import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer";

StylesManager.applyTheme("defaultV2");
const Service = () => {
    const survey = new Model(json);

  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Survey model={survey} />
      <Footer/>
    </div>
  )
}

export default Service