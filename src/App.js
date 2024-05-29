import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import ProductListing from './Pages/ProductListing';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Sidebar/>
    </div>
    <ProductListing/>
    </BrowserRouter>
  );
}

export default App;
