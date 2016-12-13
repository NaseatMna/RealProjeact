// main saga generators
import {takeEvery} from'redux-saga';
import {fork} from 'redux-saga/effects';
//import {usersFetchList,usersAddEdit} from './users';
import {fetchAllProductCategory,fetchAllServiceCategory} from './service_category';
export function* sagas() {
  yield [
    fork(takeEvery,'PRODUCT_CATEGORY_LIST',fetchAllProductCategory),
    fork(takeEvery,'SERVICE_CATEGORY_LIST',fetchAllServiceCategory)
    //fork(takeLatest,'USERS_FETCH_LIST',usersFetchList),
    //fork(takeLatest,'USER_ADD_EDIT',usersAddEdit)
  ];
}
