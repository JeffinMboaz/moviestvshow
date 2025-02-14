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

      <BrowserRouter basename='/moviestvshow'>
        <div>
          <Header />
          <Homepage />
        </div>

        <div>
          <Routes>
            <Route exact path='/moviestvshow' element={<Homepage />}></Route>
            <Route path='/popularMovies' element={<PopularMovies />}></Route>
            <Route path='/tvshows' element={<Tvshows />}></Route>
            <Route path='/upcomingmovies' element={<Upcomingmovies />}></Route>
            <Route path='/topratedmovies' element={<Toprated />}></Route>
            <Route path='/topratedshows' element={<Topratedtv />}></Route>

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
