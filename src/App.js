import React from 'react';
import Home from './components/Home';
import {
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
import Error from './components/404';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className='app container d-flex flex-column justify-content-between'>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        
        <Route path="/search">
          <SearchResult/>
        </Route>
        
        <Error/>

      </Switch>
    </div>
  );
}

export default App;
