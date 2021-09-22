import './App.css';
import Navbar from './components/Navbar';
import Dark from './components/Dark/dark.jpg';
import Light from './components/Light/white.jpg';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import Footer from './components/Footer';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type)=>{
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundImage = "url(" + Light+")";
      showalert("Lark mode has been enabled", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundImage = "url(" + Dark+")";
      showalert("Dight mode has been enabled", "success");
    }
  }
  
  return (
    <Router>
      <Navbar title='Text Converter' mode = {mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
          <div className="container">
              <Switch>
                  <Route exact path="/about">
                  <About/>
                  </Route>
                  <Route exact path="/">
                  <Form showalert={showalert} heading='Enter Your Text Here:' heading2='Output:' mode={mode}/>
                  </Route>
                </Switch>
          </div>
          <Footer mode={mode}/>
      </Router>
  );
}

export default App;
