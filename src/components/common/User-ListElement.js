/**
 * Created by Acer on 12/9/2016.
 */
import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

export default class UserListElement extends React.Component{

  render(){
  const {user}=this.props;
    return(
      <tr>
        <td>#{user.id}</td>
        <td>{user.username}</td>
        <td>{user.job}</td>
        <td>
          <Link to={'user-edit/' + user.id}>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
        <td>
          <Button bsSize="xsmall" className="user-delete">
            Delete <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }
}
//props check
//UserListElement.propTypes = {
//  user: PropTypes.object.isRequired,
//  showDelete: PropTypes.func.isRequired,
//}
