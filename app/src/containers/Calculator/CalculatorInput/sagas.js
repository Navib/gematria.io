import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  GOT_CHARACTER_EVENT,
  GET_CHARACTER_EVENT_ERROR,
  SENT_SEARCH_TERM,
  SEND_SEARCH_TERM_ERROR
} from './';

export function* sendCharacter(data) {
  try {
    yield put({ type: GOT_CHARACTER_EVENT, data });
  } catch (error) {
    console.log('getNavigation error', error.response.data.error);
    yield put({
      type: GET_CHARACTER_EVENT_ERROR,
      error: error.response.data.error
    });
  }
}

export function* submitSearchTerm(term) {
  console.log('submit ', term);
  try {
    yield put({ type: SENT_SEARCH_TERM, term });
  } catch (error) {
    console.log('getNavigation error', error.response.data.error);
    yield put({
      type: SEND_SEARCH_TERM_ERROR,
      error: error.response.data.error
    });
  }
}
