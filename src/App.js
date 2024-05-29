import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
    </BrowserRouter>
  );
}

export default App;
