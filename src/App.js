import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Background from './components/background/Background';

function App() {
  return (
    <div className="App">
      <Header />
      <Background>
        <Main />
      </Background>
      <Footer />
    </div>
  );
}

export default App;
