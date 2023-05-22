
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Products } from "./Pages"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pruducts' element={<Products />} />
    </Routes>
  );
}

export default App;
