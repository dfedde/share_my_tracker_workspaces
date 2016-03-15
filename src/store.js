import {createStore} from 'redux'


function warnNotKnown(type){
  console.log('be carefull the action type: '
              + type
              + ' is not known in the reducers'
             );
}

function gameState(state = '', action){
  // this is the function that manages all the state of the game
  // this can be broken up among other functions
  switch (action.type){
    default:
      warnNotKnown(action.type);
      return state;
  }
}


export default createStore(gameState);
