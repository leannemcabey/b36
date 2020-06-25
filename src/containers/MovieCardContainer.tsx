import React, {Component} from 'react';
import { Movie } from "../movie-list";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import arrow from "../images/icons/Arrow_green_animated2.gif";
import { ArrowButton, FlexColumn } from "../components/shared-components";

interface MovieCardContainerProps {
    movieList: Movie[];
}

interface MovieCardContainerState {
    currentMovie: Movie;
    nextMovie: Movie;
}

class MovieCardContainer extends Component<MovieCardContainerProps, MovieCardContainerState>{
    constructor(props: MovieCardContainerProps) {
        super(props);
        this.state = {
            currentMovie: this.props.movieList[0],
            nextMovie: this.props.movieList[1]
        }
    }

    handleClick = () => {
        this.setState({
            currentMovie: this.state.nextMovie,
            nextMovie: this.props.movieList[this.props.movieList.indexOf(this.state.nextMovie) + 1]
        })
    }

    render() {
        const {year, title, tomatometer, boxOfficeRank, image, watchOn} = this.state.currentMovie
        const linkTo = this.state.nextMovie ? `/movies/${this.state.nextMovie.year}` : "/muah"

        return (
            <FlexColumn>
                <MovieCard
                    year={year}
                    title={title}
                    tomatometer={tomatometer}
                    boxOfficeRank={boxOfficeRank}
                    image={image}
                    watchOn={watchOn}
                />
                <Link to={linkTo}>
                    <ArrowButton src={arrow} onClick={this.handleClick}/>
                </Link>
            </FlexColumn>
        )
    }
}

export default MovieCardContainer;
