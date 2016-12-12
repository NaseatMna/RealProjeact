/**
 * Created by Acer on 12/9/2016.
 */
import React from 'react';
import {Nav,NavItem,Glyphicon} from 'react-bootstrap';
import {IndexLinkContainer,LinkContainer} from 'react-router-bootstrap';

export default class Menu extends React.Component{
//render
  render(){
    return(
      <div>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>
              Home
            </NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/user-edit">
            <NavItem>
              AddUser<Glyphicon glyph="plus-sign"/>
            </NavItem>
          </LinkContainer>
        </Nav>
      </div>
    );
  }

}
