import React from 'react'

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        <span className="select-title"> Select a language: </span>
          <i onClick={() => this.props.onLanguageChange('english')} className="flag us"/>
          <i onClick={() => this.props.onLanguageChange('hebrew')} className="flag il"/>
          {this.state.language}
      </div>
    )
  }
}

export default LanguageSelector;
