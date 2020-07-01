import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FormInputs from './FormInputs';

class Create extends Component {

  constructor() {
    super();
    this.state = { user: {name:'',email:'',age:''} };
  }

  render() {
    const frmModel = this.state.user;
    return(
      <div className="container">
        <FormInputs objClass = {this} frmTitle = "NEW USER" frmModel = {frmModel} />
      </div>  
    );
  }
}

export default withRouter(Create);