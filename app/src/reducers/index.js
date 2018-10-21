import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { headerReducer } from '../containers/Header';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  header: headerReducer
});

export default rootReducer;
