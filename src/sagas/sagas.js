/**
 * Created by Acer on 12/12/2016.
 */
import { delay } from 'redux-saga';
import { call, put, fork, take } from 'redux-saga/effects';
import {
  REQUEST_SUGGEST, successSuggest, failureSuggest
} from './../actions/Action_Menu';
import API from './../api/search_form';

function* runRequestSuggest(text) {
  const { data, error } = yield call(API.suggest, text);
  if (data && !error) {
    yield put(successSuggest({ data }));
  } else {
    yield put(failureSuggest({ error }));
  }
}

function createLazily(msec = 1000) {
  let ongoing;
  return function* (task, ...args) {
    if (ongoing && ongoing.isRunning()) {
      ongoing.cancel();
    }
    ongoing = yield fork(function* () {
      yield call(delay, msec);
      yield fork(task, ...args);
    });
  }
}

function* handleRequestSuggest() {
  const lazily = createLazily();
  while (true) {
    const { payload } = yield take(REQUEST_SUGGEST);
    yield fork(lazily, runRequestSuggest, payload);
  }
}

export default function* rootSaga() {
  yield fork(handleRequestSuggest);
}
