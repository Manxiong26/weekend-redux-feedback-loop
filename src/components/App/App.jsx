import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feelings from '../Feeling/Feeling';
import Understanding from '../UnderStanding/UnderStanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment'
import Review from '../Review/Review'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      
      <Router>
        <Route path="/" exact>
      <Feelings />
      </Route>
      <Route path="/Understanding" exact>
      <Understanding />
      </Route>
      <Route path="/Supported" exact>
      <Support />
      </Route>
      <Route path="/Comment" exact>
      <Comment />
      </Route>
      <Route path="/Review" exact>
      <Review />
      </Route>
      </Router>
    </div>
  );
}

export default App;
