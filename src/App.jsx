import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import MoviesListPage from './pages/MoviesListPage/MoviesListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import ActorListPage from './pages/ActorListPage/ActorListPage';
import MovieCard from './components/MovieCard/MovieCard';



export default function App() {
  const [user, setUser] = useState(null);
  
  function login(user) {
    setUser(user)
  }
  
  return (
   <main className='App'>
      
      
      <Router>
      <NavBar />
      <Routes>
        <Route path='/' index element={<LoginPage login={login} />} />
        <Route path='/movies' element={<MoviesListPage />} />
        <Route path="/movies/:movieName" element={<MovieDetailPage />} />
        <Route path="/actors" element={<ActorListPage />} />
      </Routes>
      </Router>

    
  </main>
  );
}

