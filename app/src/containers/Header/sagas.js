import { takeLatest, put, call, all } from 'redux-saga/effects';
import actions, { GOT_NAVIGATION, GET_NAVIGATION_ERROR } from './';
import { api } from './';

export function* getNavigation(data) {
  try {
    const response = yield call(api.getNavigation, data);
    yield put({ type: GOT_NAVIGATION, response });
  } catch (error) {
    console.log('getNavigation error', error.response.data.error);
    yield put({ type: GET_NAVIGATION_ERROR, error: error.response.data.error });
  }
}
