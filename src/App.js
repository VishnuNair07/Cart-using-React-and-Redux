import './styles/app.css';
import './styles/header.css';
import './styles/Home.css';
import './styles/cart.css';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Home from './Components/Home'
import Header from './Components/Header';
import {Toaster} from 'react-hot-toast'
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </div>
  );
}

export default App;
