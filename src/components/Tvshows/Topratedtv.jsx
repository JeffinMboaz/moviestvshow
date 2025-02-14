import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function  Topratedtv() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/tv/top_rated?api_key=1f698941c0f28691e6c2b132251a83e9"
        );
        console.log(response.data.results)
        setProducts(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="p-6 cardbg text-white min-vh-100">
        <h1 className="text-center mb-4 p-4">Top-Rated Shows</h1>
        <div className="MovieCards container">
          <div className="row">
            {products.map((product) => (
              <div className="col-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                <Card className='Poster bg-dark text-white h-100'>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
                    alt={product.original_title}
                    className='card-img'
                  />
                  <Card.Body className='card-body'>
                    <Card.Title>{product.original_title}</Card.Title>
                    <Card.Text><span className='text-warning bg-dark fw-bolder'>IMDb :</span>⭐ <span className='fw-bolder'>{product.vote_average}</span> </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Topratedtv
