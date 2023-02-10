import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Universe from './components/Universe';
import Login from './components/Login';
import bgImg from './components/img/background.jpg'
import Pokemon from './components/Pokemon';
import DatabaseMarvel from './components/DatabaseMarvel';
import DatabaseDC from './components/DatabaseDC';
import DBZ from './components/DBZ';
import Marvel from './components/Marvel';
import DC from './components/DC';
import Disney from './components/Disney';
import DatabasePokemon from './components/DatabasePokemon';
// import Cards from './components/GamePokemon';

function App() {
  // const isLoggedIn = true;
  return (
    <Router>
      <div className='bg-cover bg-no-repeat h-[100vh] w-[100vw] text-white ' style={{ backgroundImage: `url(${bgImg})` }} >
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/universe' exact element={<Universe />} />
          <Route path='/pokemon' exact element={<Pokemon />} />
          {/* <Route path='/pokemon/quiz' exact element={<Cards />} /> */}
          {/* <Route path='/pokemon/game' exact element={<Cards />} /> */}
          <Route path='/dbz' exact element={<DBZ />} />
          <Route path='/marvel' exact element={<Marvel />} />
          <Route path='/dc' exact element={<DC />} />
          <Route path='/disney' exact element={<Disney />} />
          <Route path='/Marvel/database' exact element={<DatabaseMarvel />} />
          <Route path='/DC/database' exact element={<DatabaseDC />} />
          <Route path='/pokemon/database' exact element={<DatabasePokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
