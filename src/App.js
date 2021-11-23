import { Component } from 'react';
import Calculator from './components/Calculator';
import './components/myStyles.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
