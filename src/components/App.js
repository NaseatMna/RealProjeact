import "babel-polyfill";
import React from "react";
import {connect} from'react-redux';
import Menu from './common/Menu';
import Navigation from './shared_component/Navigation/Navigation';
import MaiMenu from './shared_component/Navigation/Main_menu';
// app component
 class Main extends React.Component {

  render() {
    return (
      <div className="container">
        <div>
          <Navigation/>
          <MaiMenu/>
        </div>

      </div>
    );
  }
}
//export connect class

export default Main;
