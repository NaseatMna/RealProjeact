/**
 * Created by Naseat on 12/6/2016.
 */

import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormGroup,InputGroup,FormControl} from 'react-bootstrap';
const location = [
  'Phnom Penh',
  'Kandal',
  'Takeve',
  'Kratie',
  'TbongKhmom',
  'Kambong Cham',
  'Priveng',
  'Sdeng Treng',
];
export default class SearchLocation extends React.Component{

    render(){
        return(
          <MuiThemeProvider>
            <div>
                <InputGroup>
                  {/* <InputGroup.Addon><img src="/images/location.png"/> </InputGroup.Addon>*/}
                      <AutoComplete className="autocomplete"
                        filter={AutoComplete.caseInsensitiveFilter}
                        dataSource={location}
                      />
                </InputGroup>
            </div>
    </MuiThemeProvider>
        );
    }
}
