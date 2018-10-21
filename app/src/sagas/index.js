import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects';
import { GET_NAVIGATION } from '../actions';
import { getNavigation } from '../containers/Header';

export function* sagas() {
  yield all([yield takeLatest(GET_NAVIGATION, getNavigation)]);
}
