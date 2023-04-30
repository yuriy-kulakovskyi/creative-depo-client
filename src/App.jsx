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

  console.log(opened)

  return (
    <div className="App">
      {/* The place to hold components */}
      
      {/* Header component */}
      <HeaderWithBurger/>

      {/* MainPage component */}
      <MainPage />

      {/* CatalogPage component */}
      <CatalogPage setOpened={setOpened}/>

      {/* HelpPage component */}
      <HelpPage />

      {/* HelpSlider component */}
      <HelpSlider />

      {/* Footer component */}
      <Footer />

      <Popup opened={opened} setOpened={setOpened}/>
    </div>
  );
}

export default App;
