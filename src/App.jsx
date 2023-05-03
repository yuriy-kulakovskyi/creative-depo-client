import './App.css';
import MainPage from "./components/MainPage/MainPage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import HelpPage from "./components/HelpPage/HelpPage";
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import HeaderWithBurger from './components/Header/HeaderWithBurger/HeaderWithBurger';
import HelpSlider from './components/HelpSlider/HelpSlider';
import Popup from './components/PopUp/popup';
import React, {useState} from 'react';

function App() {
  const [opened, setOpened] = useState(false);
  const [arr, setArr] = useState([]);
  const [objInfo, setObjInfo] = useState({})
  
  return (
    <div className="App">
      {/* The place to hold components */}
      
      {/* Header component */}
      <HeaderWithBurger/>

      {/* MainPage component */}
      <MainPage />

      {/* CatalogPage component */}
      <CatalogPage 
        arr={arr}
        setArr={setArr}
        setOpened={setOpened}
        setObjInfo={setObjInfo}
        objInfo={objInfo}/>

      {/* HelpPage component */}
      <HelpPage />

      {/* HelpSlider component */}
      <HelpSlider />

      {/* Footer component */}
      <Footer />

      <Popup 
        arr={arr} 
        opened={opened} 
        setOpened={setOpened}
        setObjInfo={setObjInfo}
        objInfo={objInfo}/>
    </div>
  );
}

export default App;
