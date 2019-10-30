import React from 'react'
import LanguageContext from './context/LanguageContext'

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  state = {
    language: 'english'
  }

  render() {
    console.log(this.context)
    return (
      <div>
        <span className="select-title"> Select a language: </span>
          <i onClick={() => this.context.onLanguageChange('english')} className="flag us"/>
          <i onClick={() => this.context.onLanguageChange('hebrew')} className="flag il"/>
          {this.state.language}
      </div>
    )
  }
}

export default LanguageSelector;
