import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

Thumb.propTypes = {
    image: PropTypes.string,
    movieName: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb;