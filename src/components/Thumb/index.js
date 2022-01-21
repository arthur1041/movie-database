import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Image } from './Thumb.styles';

const Thumb = ({image, movieName, movieId, clickable}) => {
    return (
        <div>
            {clickable ? 
                <Link to={`/movie/${movieId}`} >
                    <Image src={image} alt={movieName + " thumbnail"} title={movieName} />
                </Link>
                :
                <Image src={image} alt={movieName + " thumbnail"} title={movieName} />
            }
            
        </div>
    );
}

export default Thumb;