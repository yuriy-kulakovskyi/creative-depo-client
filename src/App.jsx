import './App.css';
import MainPage from "./components/MainPage/MainPage";
import HelpPage from "./components/HelpPage/HelpPage";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* The place to hold components */}

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
