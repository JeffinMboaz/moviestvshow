import React from 'react'
import Trailer from './Homepgcontents/Trailer'
import Upmovies from './Homepgcontents/Upmovies'
import './Homepgcontents/Homepg.css'
import Tvshow from './Homepgcontents/Tvshow'
function Homepage() {
  return (
    <div className='hmContents container-fluid py-3'>
      <div>
        <img src="https://wallpapercave.com/wp/wp7490789.jpg" alt="cover pic" 
        className='wallpaper'
        />
      </div>
      <div>
        <h2 className='text-left my-3 p-2'>Movies</h2>
        <div className='m-2 rounded'>
          <Trailer />
        </div>
        <div className='m-2 rounded'>
          <h2 className='text-left  my-3 px-2'> Upcoming Movies</h2>
          <Upmovies />
        </div>
        <div className='m-2 rounded'>
          <h2 className='text-left  my-3 px-2'> Tv Shows</h2>
          <Tvshow />
        </div>


      </div>
    </div>

  )
}

export default Homepage
