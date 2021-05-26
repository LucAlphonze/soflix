import React, { useState, useEffect } from 'react'
import {Fade} from 'react-awesome-reveal';
import axios from '../axios'; 
import requests from '../requests';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]); 

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
            ]
          );
          return request;
        }
        fetchData();
      }, []);

      function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    return (
      <Fade left> 
        <header className= 'banner'
        style= {{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backdropPosition: "center center",
        }
        } > {/* Because is in the top */}
            <div className= 'banner_contents'>
              <Fade left> 
                <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name}  </h1>
                    <div className='banner_button'>
                    <Fade left> 
                        <button className='banner_button1'>Play</button>
                        </Fade>
                    </div>
                <h1 className = 'banner_description'>
                
                   {truncate(movie?.overview, 200)}
                  
                </h1>
                </Fade>
            </div>
            <div className="banner_fadeBottom" />
        </header>
        </Fade>
    )
}

export default Banner
