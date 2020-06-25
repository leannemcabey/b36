import React, {Component} from 'react';
import { Movie } from "../movie-list";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import arrow from "../images/icons/Arrow_green_animated2.gif";
import {ArrowButton, FlexColumn, FlexColumnTop, FlexRow} from "../components/shared-components";
import styled from "styled-components";

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

    componentDidUpdate(prevProps: Readonly<MovieCardContainerProps>, prevState: Readonly<MovieCardContainerState>, snapshot?: any) {
        console.log("updated")
    }

    handleClick = (year: string) => {
        let newMovie = this.props.movieList.find(movie => movie.year === year)
        if (newMovie) {
            let nextMovie = this.props.movieList[this.props.movieList.indexOf(newMovie) + 1]
            this.setState({
                currentMovie: newMovie,
                nextMovie: nextMovie ? nextMovie : this.props.movieList[0]
            })
        }
    }

    getListOfYears = (): string[] => {
        return this.props.movieList.map(movie => movie.year)
    }

    render() {
        const {year, title, tomatometer, boxOfficeRank, image, watchOn} = this.state.currentMovie
        const linkTo = this.state.nextMovie ? `/movies/${this.state.nextMovie.year}` : `/movies/1984}`

        return (
            <FlexColumnTop className="movie-card-container">
                <YearList>
                    {this.getListOfYears().map(year =>
                        <YearLink to={`/movies/${year}`} onClick={() => this.handleClick(year)}>
                           {year}
                        </YearLink>
                    )}
                </YearList>
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
                        <ArrowButton src={arrow} onClick={() => this.handleClick(this.state.nextMovie.year)}/>
                    </Link>
                </FlexColumn>
            </FlexColumnTop>
        )
    }
}

const YearList = styled.div`
    width: 950px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`
const YearLink = styled(Link)`
    color: lime;
    font-size: 20px;
    text-shadow: 1px 1px blue;
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
`




export default MovieCardContainer;
