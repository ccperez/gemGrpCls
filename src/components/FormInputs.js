import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FormEvents from './FormEvents';
import { FormErrors } from './FormErrors';

export default class FormInputs extends Component {

  constructor(props) {
    super(props);

    this.state = {
            user: props.frmModel,
      formErrors: FormEvents.formErrors,
      fieldValid: FormEvents.fieldValid,
       formValid: FormEvents.formValid
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.frmModel !== this.props.frmModel) 
      this.setState({ user: nextProps.frmModel })
  }

  onBlur = (field) => (e) => {
    FormEvents.onBlur(this, e);
  }

  onChange(e) {
    FormEvents.onChange(this, this.state.user, e);
  }

  onSubmit(e) {
    FormEvents.onSubmit(this.props.objClass, this.state.user, e)
  }

  render() {
    const { name, email, age } = this.state.user;
    const formErrors = this.state.formErrors;
    const  formValid = this.state.formValid;
    const errorClass = FormEvents.errorClass;

    const form = { elements:[
        {"id": 1, "type":   "text", "name":  "name", "value":  name},
        {"id": 2, "type":   "text", "name": "email", "value": email},
        {"id": 3, "type": "number", "name":   "age", "value":   age}
    ]};

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.frmTitle}</h3>
        </div>
        <div className="panel-body">
          <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> User List</Link></h4>
          <form method="post" onSubmit={this.onSubmit}>
            <div className="panel panel-default">
            <FormErrors formErrors={formErrors} />
            </div>
            {form.elements.map((input, i) => {
              return (
                <div key={i} className={`form-group ${errorClass(formErrors[input.name])}`}>
                  <label>{input.name}:</label>
                  <input type={input.type} name={input.name} value={input.value} onChange={this.onChange} 
                    className="form-control" onBlur={this.onBlur(input.name)} placeholder={input.name} />
                </div>
              )
            })}
            <input disabled={!formValid} type="submit" value="Submit" className="btn btn-default" />
          </form>
        </div>
      </div>
    )
  }
}