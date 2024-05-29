import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import ProductListing from './Pages/ProductListing';

function App() {
  return (
    <BrowserRouter>
    <div className='main-container'>
      <Sidebar/>
      <ProductListing/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
