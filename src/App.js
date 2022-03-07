
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Climate from './weather/Climate';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
     <Routes>
        
        <Route exact="true" path="/climate" element={<Climate/>}/>
        <Route exact="true" path="/cart" element={<Cart/>}/>
        <Route exact="true" path="/" element={<ProductListing/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
