import './App.css';
import MainPage from "./components/MainPage/MainPage";
import HelpPage from "./components/HelpPage/HelpPage";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* The place to hold components */}
      
      {/* Header component */}
      <Header/>
      {/* MainPage component */}
      <MainPage />

      {/* HelpPage component */}
      <HelpPage />

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
