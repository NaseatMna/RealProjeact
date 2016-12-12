/**
 * Created by Acer on 12/9/2016.
 */
export default class ApiUsers{
  static getList(){
    return new Promise(resolve => {
      setTimeout(()=> {
        // build sum dummy user list
        let users = [
          {"id":1,"username":"Naseat","job":"java"},
          {"id":2,"username":"Chann","job":"php"},
          {"id":3,"username":"Dara","job":"vb"},
          {"id":4,"username":"Sona","job":"java"},
          {"id":5,"username":"Test","job":"test"},
          {"id":6,"username":"kimheng","job":"c#"},
          {"id":7,"username":"limhenag","job":"wordpress"},
          {"id":8,"username":"cheanchean","job":"japan"},
          {"id":9,"username":"chean","jobe":"job"}

        ];
        //for (let i = 1; i <= 28; i++) {
        //  users.push({
        //    id: i,
        //    username: 'Naseat Man' + i,
        //    job: 'Test' + i
        //  });
        //}
        resolve(users);
      },1000);

    });
  }
  // add edit a user



  static addEdit(){
    return new Promise(resolve =>{
      setTimeout(()=>{
        //do something
        console.log("add Edit User List");
        resolve();
      },1000);
    });
  }
  // delete a user
  static delete(){
    return new Promise(resolve => {
      setTimeout(()=>{
        // do something
        resolve();
      },500);
    })
  }
}
