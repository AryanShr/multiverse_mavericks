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

import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  // console.log(isLoggedIn)
  return (
      <div className='bg-cover bg-no-repeat h-[100vh] w-[100vw] text-white ' style={{ backgroundImage: `url(${bgImg})` }} >
        <Routes>
        
          <Route path='/' element={isLoggedIn ? <Universe /> : <Navigate to='/login' />} />
          <Route path='/login' element={isLoggedIn   ? <Navigate to='/' /> : <Login />} />
          {/* <Route path='/' exact element={<Login />} /> */}
          {/* <Route path='/universe' exact element={<Universe />} /> */}
          <Route path='/pokemon' element={isLoggedIn?<Pokemon />:<Navigate to='/login' />} />
          <Route path='/pokemon/game' element={isLoggedIn?<GamePokemon />:<Navigate to='/login' />} />
          <Route path='/pokemon/database' element={isLoggedIn?<DatabasePokemon />:<Navigate to='/login' />} />
          <Route path='/pokemon/quiz' element={isLoggedIn?<QuizPokemon />:<Navigate to='/login' />} />
          <Route path='/dbz' element={isLoggedIn?<DBZ />:<Navigate to='/login' />} />
          <Route path='/dbz/game' element={isLoggedIn?<GameDB />:<Navigate to='/login' />} />
          <Route path='/dbz/quiz' element={isLoggedIn?<DBQuiz />:<Navigate to='/login' />} />
          <Route path='/dc' element={isLoggedIn?<DC />:<Navigate to='/login' />} />
          <Route path='/DC/database' element={isLoggedIn?<DatabaseDC />:<Navigate to='/login' />} />
          <Route path='/dc/game' element={isLoggedIn?<GameDC />:<Navigate to='/login' />} />
          <Route path='/dc/quiz' element={isLoggedIn?<QuizDC />:<Navigate to='/login' />} />
          <Route path='/marvel' element={isLoggedIn?<Marvel />:<Navigate to='/login' />} />
          <Route path='/Marvel/database' element={isLoggedIn?<DatabaseMarvel />:<Navigate to='/login' />} />
          <Route path='/marvel/game' element={isLoggedIn?<GameMarvel />:<Navigate to='/login' />} />
          <Route path='/marvel/quiz' element={isLoggedIn?<QuizMarvel />:<Navigate to='/login' />} />
          <Route path='/disney' element={isLoggedIn?<Disney />:<Navigate to='/login' />} />
        </Routes>
      </div>
  );
}

export default App;
