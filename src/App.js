import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">

    {/**  NAVBAR*/}
    <Nav/>
    {/**BANNER */}
    <Banner />
    {/** ROWS */}
      <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow ={true}> </Row>
      <Row title = "TRENDING" fetchUrl = {requests.fetchTrending}> </Row>
      {/** <Row title = "TOP RATED" fetchUrl = {requests.fetchTopRated}> </Row>*/}
      <Row title = "ACTION" fetchUrl = {requests.fetchActionMovies}> </Row>
      <Row title = "COMEDY" fetchUrl = {requests.fetchComedyMovies}> </Row>
      <Row title = "ROMANCE" fetchUrl = {requests.fetchRomanceMovies}> </Row>
      <Row title = "HORROR" fetchUrl = {requests.fetchHorrorMovies}> </Row>
      <Row title = "DOCUMENTARIES" fetchUrl = {requests.fetchDocumentaries}> </Row>

    </div>
  );
}

export default App;
