

import './style/header.scss'
import './style/colors.scss'
import './style/App.scss'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
import MiniProduct from './Components/MiniProduct';


function App() {
  return (
    <Router>
    <Header/>
      <Routes>
      <Route path='/' element={<MiniProduct/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/product' element={<Product/>}  />
      <Route path='/contact' element={<Contact/>}  />
      <Route path='/miniproduct' element={<MiniProduct/>} />
      </Routes>
    </Router>
  );
}

export default App;
