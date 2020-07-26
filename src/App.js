import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
      <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}> </Row>
      <Row title = "TRENDING" fetchUrl = {requests.fetchTrending}> </Row>
      <Row title = "TOP RATED" fetchUrl = {requests.fetchTopRated}> </Row>
      <Row title = "ACTION" fetchUrl = {requests.fetchActionMovies}> </Row>
      <Row title = "COMEDY" fetchUrl = {requests.fetchComedyMovies}> </Row>
      <Row title = "ROMANCE" fetchUrl = {requests.fetchRomanceMovies}> </Row>
      <Row title = "HORROR" fetchUrl = {requests.fetchHorrorMovies}> </Row>
      <Row title = "DOCUMENTARIES" fetchUrl = {requests.fetchDocumentaries}> </Row>

    </div>
  );
}

export default App;
