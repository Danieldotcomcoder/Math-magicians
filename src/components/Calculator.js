import React from 'react';
// import operate from '../logic/operate';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: null,
    };
    this.handler = this.handler.bind(this);
  }

  handler(event) {
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
          <button type="button" onClick={this.handler}> AC </button>
          <button type="button" onClick={this.handler}> +/- </button>
          <button type="button" onClick={this.handler}> % </button>
          <button type="button" className="logic-operators" onClick={this.handler}> ÷ </button>
          <button type="button" onClick={this.handler}>7</button>
          <button type="button" onClick={this.handler}> 8 </button>
          <button type="button" onClick={this.handler}> 9 </button>
          <button type="button" className="logic-operators" onClick={this.handler}> x </button>
          <button type="button" onClick={this.handler}> 4 </button>
          <button type="button" onClick={this.handler}> 5 </button>
          <button type="button" onClick={this.handler}> 6 </button>
          <button type="button" className="logic-operators" onClick={this.handler}> - </button>
          <button type="button" onClick={this.handler}> 1 </button>
          <button type="button" onClick={this.handler}> 2 </button>
          <button type="button" onClick={this.handler}> 3 </button>
          <button type="button" className="logic-operators" onClick={this.handler}> + </button>
          <button type="button" id="zero" onClick={this.handler}> 0 </button>
          <button type="button" onClick={this.handler}> . </button>
          <button type="button" className="logic-operators" onClick={this.handler}> = </button>
        </div>
      </div>

    );
  }
}

export default Calculator;
