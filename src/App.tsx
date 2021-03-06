import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Movie } from './movie-list'
import Welcome from "./components/Welcome";
import Introduction from "./components/Introduction";
import MovieCardContainer from "./containers/MovieCardContainer";
import Start from "./components/Start";

interface AppProps {
    movieList: Movie[];
}

function App(props: AppProps) {
      return (
          <Router>
              <Wrapper className="app-wrapper">
                  <main>
                      <Switch>
                          <Route path="/" exact component={Welcome} />
                          <Route path="/intro" exact component={Introduction} />
                          <Route path="/start" exact component={Start} />
                          <Route path="/movies/:year" component={ () => <MovieCardContainer movieList={props.movieList}/>} />
                      </Switch>
                  </main>
              </Wrapper>
          </Router>
      );
}


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 700px;
  color: lime;
  font-family: 'VT323', monospace;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
`;

export default App;

