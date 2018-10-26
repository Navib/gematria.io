import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { headerReducer } from '../containers/Header';
import { searchTermReducer } from '../containers/Calculator/CalculatorInput';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  header: headerReducer,
  searchTerm: searchTermReducer
});

export default rootReducer;
