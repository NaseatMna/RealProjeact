import assert from "assert";
import users from "../../src/reducers/user";

// unit tests for the users reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
describe('Users reducer', () => {
  describe('USERS_LIST_SAVE', () => {
    it('should return a list of users', () => {
      assert.deepEqual(
        users({}, {
          type: 'USERS_LIST_SAVE',
          users: [{
            id: 1,
            username: 'Some name',
            job: 'Some job',
          }],
        }), [{
          id: 1,
          username: 'Some name',
          job: 'Some job',
        }]
      );
    });
  });
});


  //describe('USERS_EDIT_SAVE', () => {
  //  it('should return an edited user array element', () => {
  //    assert.deepEqual(
  //      users([{
  //        id: 1,
  //        username: 'Some name',
  //        job: 'Some job',
  //      }, {
  //        id: 2,
  //        username: 'Other name',
  //        job: 'Other job',
  //      }], {
  //        type: 'USERS_EDIT_SAVE',
  //        user: {
  //          id: 2,
  //          username: 'Changed name',
  //          job: 'Changed job',
  //        },
  //      }), [{
  //        id: 1,
  //        username: 'Some name',
  //        job: 'Some job',
  //      }, {
  //        id: 2,
  //        username: 'Changed name',
  //        job: 'Changed job',
  //      }]
  //    );
  //  });
  //});

//  describe('USERS_DELETE_SAVE', () => {
//    it('should return the user array without the deleted element', () => {
//      assert.deepEqual(
//        users([{
//          id: 1,
//          username: 'Some name',
//          job: 'Some job',
//        }, {
//          id: 2,
//          username: 'Other name',
//          job: 'Other job',
//        }], {
//          type: 'USERS_DELETE_SAVE',
//          user_id: 2,
//        }), [{
//          id: 1,
//          username: 'Some name',
//          job: 'Some job',
//        }]
//      );
//    });
//  });
//});
