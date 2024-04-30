import {useEffect, useState} from "react";
import {getMovieList} from "../api/MovieAPI";
import MovieItem from "../components/Movieitem";

function MovieList() {
    const [movieList, setMovieList] = useState();

    useEffect(()=> {
        getMovieList().then(data => setMovieList(data));
        /*수행을 모두 다한 다음, 데이터를 담아서 리스트로 세팅하겠다*/
    }, []);



    return (
        <div className="content-row">
            {movieList && movieList.map(movie=> <MovieItem key={movie.movieCd} movie={movie}/>)}

        </div>
    );
}

export default MovieList;