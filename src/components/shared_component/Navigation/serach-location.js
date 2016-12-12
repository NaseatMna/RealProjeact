/**
 * Created by Naseat on 12/6/2016.
 */

import React from 'react';
import {FormGroup,InputGroup,FormControl} from 'react-bootstrap';
export default class SearchLocation extends React.Component{

    render(){
        return(
            <div>
                <InputGroup>
                  <InputGroup.Addon><img src="/images/location.png"/> </InputGroup.Addon>
                  <FormControl type="text" placeholder="Locations"/>
                </InputGroup>
            </div>
        );
    }
}
