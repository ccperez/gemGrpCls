import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import FormInputs from './FormInputs';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = { user: {name:'',email:'',age:''} };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get('/api/user/'+id).then((res) => {
      this.setState({ user: res.data });
      // console.log(this.state.user);
    });
  }

  render() {
    const frmModel = this.state.user;
    return(
      <div className="container">
        <FormInputs objClass = {this} frmTitle = "EDIT USER" frmModel = {frmModel} />
      </div>
    );
  }
}

export default withRouter(Edit);