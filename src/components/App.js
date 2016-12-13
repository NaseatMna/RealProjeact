import "babel-polyfill";
import React from "react";
import {connect} from'react-redux';
import Menu from './common/Menu';
import Navigation from './shared_component/Navigation/Navigation';
import MaiMenu from './shared_component/Navigation/Main_menu';
import DiamonProduct from './shared_component/Diamond_component.jsx';
import Footer from './shared_component/Footer/Footer.jsx';
import Company from './shared_component/Company.jsx';
// app component
 class Main extends React.Component {

  render() {
    return (
        <div>
          <Navigation/>
          {/*
           <MaiMenu/>
           <DiamonProduct/>
           <Company/>
           <Footer/>
          */}

        </div>
    );
  }
}
//export connect class

export default Main;
