import React from "react";
import UsersList from'./common/User-List';
// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <UsersList/>
      </div>
    );
  }
}
