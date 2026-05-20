import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useApp } from './hooks/useApp';
import './App.css';

const App = () => {
  useApp();

  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
