import React from "react";
import "./App.css";
import Row from "./Row";
import Requsests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";

//const Star = () => React.createElement('div',null,'This is a little stat');

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NetFlix Originals"
        fetchUrl={Requsests.fetchNetflixOriginals}
        islargeRow={true}
      />
      <Row title="Action Movies" fetchUrl={Requsests.fetchActionMovies} />
      <Row title="Top Rated" fetchUrl={Requsests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={Requsests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requsests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requsests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={Requsests.fetchDocumentaries}
      />
      <Row title="Drama solo" fetchUrl={Requsests.fetchDramasolo} />
      <Row title="Trending" fetchUrl={Requsests.fetchTrending} />
      <Row title="Hooly wood" fetchUrl={Requsests.fetchHooly} />
      <Row title="Shooting" fetchUrl={Requsests.fetchShooting} />
      <Row title="Sweet" fetchUrl={Requsests.fetchSweet} />
      <Row title="Scared" fetchUrl={Requsests.fetchScared} />
      <Row title="Catoon" fetchUrl={Requsests.fetchGhost} />
      <Row title="Hunting" fetchUrl={Requsests.fetchGH} />
    </div>
  );
};

export default App;
