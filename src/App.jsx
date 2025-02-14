import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/Homepage';
import PopularMovies from './components/movies/PopularMovies';
import Tvshows from './components/Tvshows/Tvshows';
import Upcomingmovies from './components/movies/Upcomingmovies';
import Toprated from './components/movies/Toprated';
import Topratedtv from './components/Tvshows/Topratedtv'
import Footer from './components/Footer';

function App() {
  return (
    <>
<BrowserRouter basename="/moviestvshow">
  <div>
    <Header />
    <Homepage />
  </div>

  <div>
    <Routes>
      <Route exact path="/moviestvshow" element={<Homepage />} />
      <Route path="/moviestvshow/popularMovies" element={<PopularMovies />} />
      <Route path="/moviestvshow/tvshows" element={<Tvshows />} />
      <Route path="/moviestvshow/upcomingmovies" element={<Upcomingmovies />} />
      <Route path="/moviestvshow/topratedmovies" element={<Toprated />} />
      <Route path="/moviestvshow/topratedshows" element={<Topratedtv />} />
    </Routes>
  </div>

  <div>
    <Footer />
  </div>
</BrowserRouter>

    </>
  )
}

export default App
