import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: null,
    };
    this.operator = this.operator.bind(this);
  }

  operator(event) {
    this.setState((state) => calculate(state, event.target.innerText));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculator">
        <div className="calc-output">
          <div className="calc-result">
            {next || (total || '0')}
          </div>
        </div>
        <div className="calc-grid">
          <button type="button" onClick={this.operator}> AC </button>
          <button type="button" onClick={this.operator}> +/- </button>
          <button type="button" onClick={this.operator}> % </button>
          <button type="button" className="logic-operators" onClick={this.operator}> ÷ </button>
          <button type="button" onClick={this.operator}>7</button>
          <button type="button" onClick={this.operator}> 8 </button>
          <button type="button" onClick={this.operator}> 9 </button>
          <button type="button" className="logic-operators" onClick={this.operator}> x </button>
          <button type="button" onClick={this.operator}> 4 </button>
          <button type="button" onClick={this.operator}> 5 </button>
          <button type="button" onClick={this.operator}> 6 </button>
          <button type="button" className="logic-operators" onClick={this.operator}> - </button>
          <button type="button" onClick={this.operator}> 1 </button>
          <button type="button" onClick={this.operator}> 2 </button>
          <button type="button" onClick={this.operator}> 3 </button>
          <button type="button" className="logic-operators" onClick={this.operator}> + </button>
          <button type="button" id="zero" onClick={this.operator}> 0 </button>
          <button type="button" onClick={this.operator}> . </button>
          <button type="button" className="logic-operators" onClick={this.operator}> = </button>
        </div>
      </div>

    );
  }
}

export default Calculator;
