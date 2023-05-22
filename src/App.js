
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Products } from "./Pages"
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changeLang = (language) => {
    i18n.changeLanguage(language)
  }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pruducts' element={<Products />} />
    </Routes>
  );
}

export default App;
