import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
// import './App.css';

class App extends React.Component {
  render (){
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top ">
        <a class="navbar-brand text-danger font-weight-bold">COVID-19 | INDONESIA </a>

        <div class="beranda">
          <a href="/" class="text-warning">BERANDA </a> 
          <a class="text-dark">nanna</a> 
          <a href="/protokol" class="text-warning">PROTOKOL </a> 
          <a class="text-dark">nanna</a> 
          <a href="/data" class="text-warning">DATA TERKINI </a> 
        </div>
        
        <form class="form-inline my-2 my-lg-0 ml-auto"> 
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      
      <p><Utama /></p>

      </div>
    );
  }
}

export default App;
