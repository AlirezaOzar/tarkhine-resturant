import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import Ekbatan from './pages/Ekbatan';
import MenuPage from './pages/MenuPage';

function App() { 

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ekbatan' element={<Ekbatan/>}/>
          <Route path='/menu' element={<MenuPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
