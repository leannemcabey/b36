import React from 'react';
import styled from 'styled-components';
import { BigTitle, Icon, MediumTitle } from "./shared-components";
import tomatometer from "../images/icons/tomatometer.png";
import netflix from "../images/icons/netflix.png";
import vudu from "../images/icons/vudu.png"
import moviesAnywhere from "../images/icons/moviesanywhere.png"
import googlePlay from "../images/icons/googleplay.png"
import boxoffice from "../images/icons/boxoffice.png"

interface MovieCardProps {
    year: string,
    title: string,
    tomatometer: string,
    boxOfficeRank: string,
    image: string,
    watchOn: string
}

function MovieCard(props: MovieCardProps) {

    const getStreamingPlatform = () => {
        switch(props.watchOn) {
            case "netflix":
                return netflix
            case "vudu":
                return vudu
            case "movies anywhere":
                return moviesAnywhere
            case "google":
                return googlePlay
            default:
                return vudu
        }
    }

    return (
        <MovieCardWrapper className="movie-card">
            <MovieCardImage src={require(`../images/movie-posters/${props.image}`)}/>
            <MovieMetaData>
                <MediumTitle>
                    {props.year}
                </MediumTitle>
                <MovieTitle>
                    {props.title}
                </MovieTitle>
                <Metrics className="metrics">
                    <div>
                        <Icon src={tomatometer} size={30}/>
                        {props.tomatometer}
                    </div>
                    <div>
                        <Icon src={boxoffice} size={30}/>
                        {props.boxOfficeRank === "N/A" ? "N/A" : `#${props.boxOfficeRank}`}
                    </div>
                </Metrics>
                <StreamingPlatform>
                    <Icon src={getStreamingPlatform()} size={50}/>
                </StreamingPlatform>
            </MovieMetaData>
        </MovieCardWrapper>
    )
}

const MovieCardWrapper = styled.div`
    margin-top: 10%;
    height: 350px;
    width: 650px;
    display: flex;
    flex-direction: row;
    background-color: #141414;
    box-shadow: 0px 0px 300px #888888;
    border-radius: 25px;
    padding: 30px;
    color: white;
    
    @media (max-width: 500px) {
        width: 300px;
        height: 230px;
    }
`

const MovieTitle = styled.h1`
  font-size: 3em;
  color: blue;
  text-shadow: 2px 2px lime;
  margin-top: 0px;
  
  @media (max-width: 500px) {
    font-size: 25px;
  }
`

const MovieCardImage = styled.img`
    height: 300px;
    width: 200px;
    
    @media (max-width: 500px) {
        height: 170px;
        width: 120px;
    }
`

const MovieMetaData = styled.div`
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Metrics = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    font-size: 25px;
    
    @media (max-width: 500px) {
        width: 100%;
        font-size: 15px;
    }
`

const StreamingPlatform = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
`


export default MovieCard;