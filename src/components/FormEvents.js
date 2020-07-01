import axios from 'axios';

const validateField = (main, fieldName, value) => {
  const state = main.state;
  const fieldValidationErrors = state.formErrors;
  const fieldValid = state.fieldValid;

  switch(fieldName) {
    case 'name':
      fieldValid.name = value.length >= 2;
      fieldValidationErrors.name = fieldValid.name ? '': ' is too short';
      break;
    case 'email':
      fieldValid.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = fieldValid.email ? '' : ' is invalid';
      break;
    case 'age':
      fieldValid.age = value.length;
      fieldValidationErrors.age = fieldValid.age ? '': ' is require';      
      break;
  }

  main.setState(
    {
      formErrors: fieldValidationErrors, 
      fieldValid: fieldValid
    },
    validateForm(main)
  );
}

const validateForm = (main) => {
  const fieldValid = main.state.fieldValid;
  main.setState({formValid: fieldValid.name && fieldValid.email && fieldValid.age});
}

const onFieldValidation = (main, e) => {
  const  name = e.target.name;
  const value = e.target.value;

  main.setState(
    {[name]: value},() => { 
      validateField(main, name, value) 
    }
  );
}

export default {
  formErrors: {name: '', email: '', age: ''},

  fieldValid: {name: false, email: false, age: false},

  formValid: false,

  errorClass: (error) => {
    return(error.length === 0 ? '' : 'has-error');
  },

  onBlur: (main, e) => {
    onFieldValidation(main, e);
  },

  onChange: (main, model, e) => {
    model[e.target.name] = e.target.value;
    onFieldValidation(main, e);
  },

  onSubmit: (main, model, evt) => {
    evt.preventDefault();
    const id = main.props.match.params.id;
    if ( id ) 
      axios.put('/api/user/'+id, model).then((result) => {
        main.props.history.push('/show/'+id)
      })
    else
      axios.post('api/user', model).then((result) => {
        main.props.history.push('/')
      })
  }      
};
