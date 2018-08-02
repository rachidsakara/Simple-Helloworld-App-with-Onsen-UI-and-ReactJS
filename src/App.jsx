import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, Icon} from 'react-onsenui';
var ons = require('onsenui');
var Ons = require('react-onsenui');



export default class App extends React.Component {
  
  handleClick(){
      ons.notification.alert('Hello world!');
   }

  renderToolbar() {
    return (
      <Toolbar>
         <div className="center">My app</div>
         <div className="right">
            <Ons.Icon size={{default: 20, material: 28}}
                      icon={{default: 'ion-navicon', material: 'md-menu'}} 
            />
         </div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
            <p style={{textAlign: "center"}}>
               <Button onClick={this.handleClick}>
                  Say hello!
               </Button>
            </p>
      </Page>
    );
  }


}