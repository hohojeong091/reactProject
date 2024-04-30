import {Link} from "react-router-dom";

function MovieItem({movie}) {
    return(
        <Link to={`/movie/${movie.movieCd}`}>
        <div className="item">
            <h3>순위 : {movie.rank}</h3>
            <h3>영화 제목 : {movie.movieNm}</h3>
            <h3>개봉일 : {movie.openDt}</h3>
        </div>
        </Link>
    );
}

export default MovieItem;