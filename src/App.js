import { React, Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './components/myStyles.css';
import Home from './components/Home';
import Quote from './components/Quote';
import Nav from './components/Nav';
import Calculator from './components/Calculator';
import './components/pages.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <h1 id="main-title">Math Magicians</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </Router>

    );
  }
}

export default App;
