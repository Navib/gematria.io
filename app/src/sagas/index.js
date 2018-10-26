import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects';
import {
  GET_NAVIGATION,
  GET_CHARACTER_EVENT,
  SEND_SEARCH_TERM
} from '../actions';
import { getNavigation } from '../containers/Header';
import {
  sendCharacter,
  submitSearchTerm
} from '../containers/Calculator/CalculatorInput';

export function* sagas() {
  yield all([yield takeLatest(GET_NAVIGATION, getNavigation)]);
  yield all([yield takeLatest(GET_CHARACTER_EVENT, sendCharacter)]);
  yield all([yield takeLatest(SEND_SEARCH_TERM, submitSearchTerm)]);
}
