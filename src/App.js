import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Universe from './components/Universe';
import Login from './components/Login';
import bgImg from './components/img/sky.jpg'

function App() {
  // const isLoggedIn = true;
  return (
    <Router>
      <div className='bg-cover bg-no-repeat h-[100vh] w-[100vw] flex text-white justify-center items-center' style={{ backgroundImage: `url(${bgImg})` }} >
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/universe' exact element={<Universe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
