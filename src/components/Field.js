import React from 'react';
import './style.scss';
import LanguageContext from './context/LanguageContext';


class Field extends React.Component {
  static contextType = LanguageContext;

  render () {
    const labelLanguage = this.context === 'english' ? 'name' : 'שם'; 
    return (
      <div className="ui field">
        <label> {labelLanguage} </label>
        <input />
      </div>
    )
  }
}

export default Field;