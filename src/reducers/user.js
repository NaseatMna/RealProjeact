/**
 * Created by Acer on 12/9/2016.
 */
export default function users(state={}, action) {

  switch (action.type){
    case 'USERS_LIST_SAVE':
          return action.users;

    case 'USERS_ADD_SAVE':
      const user = action.user;
      user.id = user.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, user];

    case 'USERS_EDIT_SAVE':
      console.log("edit save user");
          //return state.map(user=>
          //Number(user.id)===Number(action.user.id)? {...action.user}:user);
    break;
    default:
      return state;
  }

}
