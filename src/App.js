import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Universe from './components/Universe';
import Login from './components/Login';
import bgImg from './components/img/sky.jpg'
import Pokemon from './components/Pokemon';
import Database from './components/Database';
import DBZ from './components/DBZ';
import Marvel from './components/Marvel';
import DC from './components/DC';
import Disney from './components/Disney';

function App() {
  // const isLoggedIn = true;
  return (
    <Router>
      <div className='bg-cover bg-no-repeat h-[100vh] w-[100vw] text-white ' style={{ backgroundImage: `url(${bgImg})` }} >
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/universe' exact element={<Universe />} />
          <Route path='/pokemon' exact element={<Pokemon />} />
          <Route path='/dbz' exact element={<DBZ />} />
          <Route path='/marvel' exact element={<Marvel />} />
          <Route path='/dc' exact element={<DC />} />
          <Route path='/disney' exact element={<Disney />} />
          <Route path='/:universe/database' exact element={<Database />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
