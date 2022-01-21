import React, { useState, useEffect } from 'react';
// API
import API from '../API';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components
import { HomeWrapper } from './Home.styles';
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';


//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

    if(error) return <div>Something went wrong...</div>;

    if (state)
        return (
            <>
                <HomeWrapper>
                    {!searchTerm && state.results[0] ?
                        <HeroImage
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                            title={state.results[0].original_title}
                            text={state.results[0].overview}
                        />
                        : null}

                    <SearchBar setSearchTerm={setSearchTerm} />

                    <Grid header={
                        searchTerm
                        ? `Search Result for ${searchTerm.length < 50 ? searchTerm : searchTerm.substring(0, 47) + "..."}`
                        : "Popular Movies"}>
                        {state.results.map(movie => {
                            return <Thumb
                                key={movie.id}
                                clickable={true}
                                image={
                                    movie.poster_path
                                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                        : NoImage
                                }
                                movieId={movie.id}
                                movieName={movie.title}
                            />
                        })}
                    </Grid>
                    { loading ? <Spinner /> : null} 
                    {state.page < state.total_pages && !loading && (
                        <Button text="Load More" callback={()=>setIsLoadingMore(true)} />
                    )}
                    
                </HomeWrapper>
            </>
        )

    return <div>No results</div>

}

export default Home;