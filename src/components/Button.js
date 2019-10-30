import React from 'react';
import './style.scss';
import LanguageContext from './context/LanguageContext';

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit': 'להצטרפות'
  }
  render () {

    return (
      <div className="btn">
        <button className="ui button primary"> 
          <LanguageContext.Consumer>
            {({ language }) => this.renderSubmit(language)}
          </LanguageContext.Consumer>
        </button>
      </div>
    )
  }
}
// ONE MORE OPTION TO WRITE THE LanguageContext
// Button.contextType = LanguageContext
export default Button;