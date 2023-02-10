import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Universe from './components/Universe';
import Login from './components/Login';
import bgImg from './components/img/sky.jpg'
import Pokemon from './components/Pokemon';
import DatabaseMarvel from './components/DatabaseMarvel';
import DatabaseDC from './components/DatabaseDC';
import DBZ from './components/DBZ';
import Marvel from './components/Marvel';
import DC from './components/DC';
import Disney from './components/Disney';
import DatabasePokemon from './components/DatabasePokemon';
import GamePokemon from './components/GamePokemon';
import GameMarvel from './components/GameMarvel';
import GameDC from './components/GameDC';
import GameDB from './components/GameDB';
import DBQuiz from './components/QuizDB';
import QuizPokemon from './components/QuizPokemon';
import QuizMarvel from './components/QuizMarvel';
import QuizDC from './components/QuizDC';

function App() {
  // const isLoggedIn = true;
  return (
    <Router>
      <div className='bg-cover bg-no-repeat h-[100vh] w-[100vw] text-white ' style={{ backgroundImage: `url(${bgImg})` }} >
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/universe' exact element={<Universe />} />
          <Route path='/pokemon' exact element={<Pokemon />} />\
          <Route path='/pokemon/game' exact element={<GamePokemon />} />
          <Route path='/pokemon/database' exact element={<DatabasePokemon />} />
          <Route path='/pokemon/quiz' exact element={<QuizPokemon />} />
          <Route path='/dbz' exact element={<DBZ />} />
          <Route path='/dbz/game' exact element={<GameDB />} />
          <Route path='/dbz/quiz' exact element={<DBQuiz />} />
          <Route path='/dc' exact element={<DC />} />
          <Route path='/DC/database' exact element={<DatabaseDC />} />
          <Route path='/dc/game' exact element={<GameDC />} />
          <Route path='/dc/quiz' exact element={<QuizDC />} />
          <Route path='/marvel' exact element={<Marvel />} />
          <Route path='/Marvel/database' exact element={<DatabaseMarvel />} />
          <Route path='/marvel/game' exact element={<GameMarvel />} />
          <Route path='/marvel/quiz' exact element={<QuizMarvel />} />
          <Route path='/disney' exact element={<Disney />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
