import { BrowserRouter, Route } from 'react-router-dom';
import 'swiper/swiper.min.css'
import './assets/boxicons/css/boxicons.min.css'
import './App.scss';
import Router from './config/Router';
import Footer from './components/Footer/index.js'
import Header from './components/Header/index.js';
function App() {
  return (
    <BrowserRouter>
      <Route render={props => (
        <>
        <Header {...props}/>
        <Router/>
        <Footer/>
        </>
      )} />
    </BrowserRouter>
  );
}

export default App;
