

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ImageUploader from './components/ImageUploader';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }




  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' rgb(1 48 92)';
      showAlert("Dark mode has been enable ", "success")
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable ", "success")

    }
  }


  return (
    <>
      <Router>
        <Routes>
          <Route path="/about"
            element={<About mode={mode} />}>
          </Route>

          <Route path="/"
            element={<LandingPage showAlert={showAlert} heading="Enter the text" mode={mode} />}
          //  <Textform showAlert={showAlert} heading="Enter the text" mode={mode} /> 

          >

          </Route>
          <Route path="/image"
            element={<ImageUploader showAlert={showAlert} heading="Enter the text" mode={mode} />}
          //  <Textform showAlert={showAlert} heading="Enter the text" mode={mode} /> 

          >

          </Route>

        </Routes>



        {/* <About/> */}

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

