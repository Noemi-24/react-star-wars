import {Route, Routes} from 'react-router-dom';
import './App.css';
import StarshipDetails from './components/StarshipDetails';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/starships/:id/' element={<StarshipDetails/>}/>
      </Routes>
    </>
  )
};

export default App;
