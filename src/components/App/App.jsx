import React from 'react';
import './App.css';
//import these to route my components on the DOM  
import {HashRouter as Router, Route,} from 'react-router-dom';
import Feelings from '../Feeling/Feeling';
import Understanding from '../UnderStanding/UnderStanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

function App() {


  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/*Routing the components*/}
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
      <Route path="/ThankYou" exact>
      <ThankYou />
      </Route>
      </Router>
      {/*End of Router*/}
    </div>
  );
}

export default App;
