import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Upmovies() {
    const [posters, setPosters] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    "https://api.themoviedb.org/3/movie/upcoming?api_key=1f698941c0f28691e6c2b132251a83e9"
                );
                setPosters(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className='movieposters rounded'>
            <div className="container-fluid  m-3 p-3">
                <h2 className="text-left mb-3 h4">Upcoming Movies</h2>
                <div className="scroll-container">
                    {posters.map((mvposter, index) => (
                        <div key={index} className="poster">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${mvposter.poster_path}`}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Upmovies
