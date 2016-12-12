// main saga generators
import {takeLatest} from'redux-saga';
import {fork} from 'redux-saga/effects';
import {usersFetchList,usersAddEdit} from './users';
export function* sagas() {
  yield [
    fork(takeLatest,'USERS_FETCH_LIST',usersFetchList),
    fork(takeLatest,'USER_ADD_EDIT',usersAddEdit)
  ];
}
