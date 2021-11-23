import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calc-output">
          <div className="calc-result"> 0 </div>
        </div>
        <div className="calc-grid">
          <button type="button"> AC </button>
          <button type="button"> +/- </button>
          <button type="button"> % </button>
          <button type="button" className="logic-operators"> ÷ </button>
          <button type="button"> 7 </button>
          <button type="button"> 8 </button>
          <button type="button"> 9 </button>
          <button type="button" className="logic-operators"> x </button>
          <button type="button"> 4 </button>
          <button type="button"> 5 </button>
          <button type="button"> 6 </button>
          <button type="button" className="logic-operators"> - </button>
          <button type="button"> 1 </button>
          <button type="button"> 2 </button>
          <button type="button"> 3 </button>
          <button type="button" className="logic-operators"> + </button>
          <button type="button" id="zero"> 0 </button>
          <button type="button"> . </button>
          <button type="button" className="logic-operators"> = </button>
        </div>
      </div>

    );
  }
}

export default Calculator;
