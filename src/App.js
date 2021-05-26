import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Row from './components/Row'
import requests from './requests.js'
import Banner from './components/Banner'
import Presentation from './components/Presentation'
import About from './components/About'

function App () {
  return (
    <div className='app'>
      
      <Route exact path='/' component={Presentation} />
      <Route exact path= '/about' component= {About} /> 
      <Route exact path='/home' component={Banner}/>
      <Route exact path='/home' render={() => <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />} />
      <Route exact path='/home' render={() => <Row title='Trending Now' fetchUrl={requests.fetchTrending} />} />
      <Route exact path='/home' render={() => <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />} />
      <Route exact path='/home' render={() => <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />} />
      <Route exact path='/home' render={() => <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />} />
      <Route exact path='/home' render={() => <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />} />
      <Route exact path='/home' render={() => <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />} />
      <Route exact path='/home' render={() => <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />} />
    </div>
  )
}

export default App
