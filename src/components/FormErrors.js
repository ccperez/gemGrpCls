import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      return (formErrors[fieldName].length) ? (<p key={i}>{fieldName}{formErrors[fieldName]}</p>) : '';
    })}
  </div>