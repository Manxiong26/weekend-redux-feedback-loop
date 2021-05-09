import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
//Created feeling reducer for the feeling Component 
const feeling = (state ={}, action ) => {
  console.log('Hello from the feeling Reducer');
  if(action.type === 'ADD_FEELINGS'){
    // return the state and action 
    return state, action.payload
  }
  //if the previous state doesn't work return origin state 
  return state;
}
//Created underStanding reducer for the underStanding Component 
const underStanding = (state={}, action ) => {  //set the state to an object 
  console.log('Hello from the Understanding Reducer');
  if(action.type === 'ADD_UNDERSTANDING'){
    // return the state and action 
    return state, action.payload
  }
  //if the previous state doesn't work return origin state 
  return state;
}
//Created support reducer for the support Component 
const support = (state={}, action ) => {  //set the state to an object 
  console.log('Hello from the Support Reducer');
  if(action.type === 'ADD_SUPPORT'){
    // return the state and action 
    return state, action.payload
  }
  //if the previous state doesn't work return origin state 
  return state;
}
//Created comment reducer for the comment Component 
const comment = (state={}, action ) => {  //set the state to an object 
  console.log('Hello from the Comments Reducer');
  if(action.type === 'ADD_COMMENTS'){
    // return the state and action 
    return state, action.payload
  }
  //if the previous state doesn't work return origin state 
  return state;
}

const storeInstance = createStore(
    //this makes it so you can call multiple reducers
    combineReducers({
    //reducers go inside our store - these are specific to our app
      feeling,
      underStanding,
      support,
      comment
    }),
    //Also add our middleware for the logger
    applyMiddleware(
      logger
    )
  );

ReactDOM.render(
<React.StrictMode>
<Provider store={storeInstance}>
    <App />
  </Provider>
</React.StrictMode>, document.getElementById('root'));
registerServiceWorker();
