import React from 'react';
import './style.scss';
import UserCreate from './UserCreate';
import {LanguageStore} from './context/LanguageContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component{

  render() {
    return (
      <div className="ui container">
      <LanguageStore>
        <LanguageSelector/>
        <UserCreate/>
      </LanguageStore>

      </div>
    )
  }
}
export default App;
