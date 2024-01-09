
import './App.css';
import { Route,Routes } from 'react-router-dom';

import Header from './Components/Header';
import Shop from './Components/Shop'
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Details from './Components/Details'
import { CartProvider } from './Components/CartContext';

function App() {
  return (
    <div>
      <Header></Header>
      <CartProvider>
      <Routes>

        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='shop'>
          <Route index element={<Shop></Shop>}/>
          <Route path=':id'element={<Details></Details>}/>

        </Route>
        
      </Routes>
      </CartProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
