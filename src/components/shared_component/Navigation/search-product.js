/**
 * Created by Naseat on 12/6/2016.
 */

import React from 'react';
import {FormControl,button} from 'react-bootstrap';
export default class SearchProduct extends React.Component{
  constructor(props) {
    super(props);
  };

  updateState(e) {
    this.setState({data: e.target.value});
  }

  render(){
    return(
            <div>
              <FormControl type="text" placeholder="Search" />

            </div>
        );
    }

}
