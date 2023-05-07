import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import Ekbatan from './pages/Ekbatan';
import MenuPage from './pages/MenuPage';
import ShoppingCard from './components/ShoppingCard/ShoppingCard';
import DeputizePage from './pages/DeputizePage';

function App() { 

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ekbatan' element={<Ekbatan/>}/>
          <Route path='/menu' element={<MenuPage/>}/>
          <Route path='/shopping-card' element={<ShoppingCard/>}/>
          <Route path='/deputize' element={<DeputizePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
