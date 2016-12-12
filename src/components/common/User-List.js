/**
 * Created by Acer on 12/9/2016.
 */
import React from'react';
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import UsersListElement from './User-ListElement';

 class UsersList extends React.Component{
  constructor(props){
    super(props);

    // bind <this> to the event method
    this.changePage = this.changePage.bind(this);

  }
  render(){
    //pagination
    const {users,page}=this.props;
    const per_page=8;
    const pages=Math.ceil(users.length / per_page);
    const start_offset=(page-1)*per_page;
    let start_count=0;
    //show the list of users
    return(
      <div>
        <Table bordered hover responsive striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Job</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {
            users.map((user,i) => {
            if(i >= start_offset && start_count < per_page){
              start_count++;
              return(
                <UsersListElement key={i} user={user} />
              );
            }
          })}
         </tbody>
          </Table>
        <Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next
                    prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>
        </div>

    );
  }
   // change the user lists' current page
   changePage(page) {
     this.props.dispatch(push('/?page=' + page));
   }
}


function mapStateToProps(state){
  return{
    users:state.users,
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  }
}
export default connect(mapStateToProps)(UsersList)
