import './App.css';
import Loader from './components/loader/Loader';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Service from './pages/service/Service';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Inquire from './pages/inquiry/Inquire';
import Question from './pages/question/Question';
function App() {

  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);

    },3000);

  }, []);

  return (
    <div >
      {loading 
      ? (<Loader/>) 
      :
      (
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route  path="/estimate" element={<Service/>}/> 
          <Route  path="/about" element={<About/>}/> 
          <Route  path="/inquiry" element={<Inquire/>}/> 
          <Route  path="/question" element={<Question/>}/> 
          </Routes>
        </Router>
      
      )}

    </div>
  );
}

export default App;
