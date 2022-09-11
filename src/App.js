
import './App.scss';
import Layout from './components/Layout';
import {Routes,Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/" element={<Sidebar />} />
    <Route path="/" element={<Home />} />
    
  </Routes>
  </>
  );
}

export default App;
