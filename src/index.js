import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedBack = (state = [], action ) => {
    console.log('Hello from the feed back Reducer');
    if(action.type === 'ADD_FEEDBACK'){
        return action.payload
    }
    return state;
}

const feeling = (state =0, action ) => {
  console.log('Hello from the feeling Reducer');
  if(action.type === 'ADD_FEELINGS'){
    return [state, action.payload]
  }
  return state;
}

const underStanding = (state=0, action ) => {
  console.log('Hello from the Understanding Reducer');
  if(action.type === 'ADD_UNDERSTANDING'){
    return [state, action.payload]
  }
  return state;
}


const storeInstance = createStore(
    //this makes it so you can call multiple reducers
    combineReducers({
    //reducers go inside our store - these are specific to our app
      feedBack,
      feeling,
      underStanding
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
