/**
 * Created by Acer on 12/9/2016.
 */
import { call , put } from 'redux-saga/effects';
import ApiUsers from './../api/users';
// fetch user list
export function* usersFetchList(action){

//call API to get user in list
  const users=yield call(ApiUsers.getList);

// save the user in state
  yield put({
    type:'USERS_LIST_SAVE',
    users:users
  });

}
// add/edit user
export function * usersAddEdit(action){
   //call api to add/edit the user
  const user=yield call(ApiUsers.addEdit);
    // show error when api call error
  // update the state by adding/editing the user
  yield put({
    type:'USERS_EDIT_SAVE',
    user:user
  });
  //success
  action.callbackSuccess();
}
