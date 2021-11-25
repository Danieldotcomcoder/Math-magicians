import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const operator = (e) => {
    const operator = calculate({ total, next, operation }, e.target.innerText);
    setTotal(operator.total);
    setNext(operator.next);
    setOperation(operator.operation);
  };

  return (
    <div className="calculator">
      <div className="calc-output">
        <div className="calc-result">
          {next || (total || '0')}
        </div>
      </div>
      <div className="calc-grid">
        <button type="button" onClick={operator}> AC </button>
        <button type="button" onClick={operator}> +/- </button>
        <button type="button" onClick={operator}> % </button>
        <button type="button" className="logic-operators" onClick={operator}> ÷ </button>
        <button type="button" onClick={operator}>7</button>
        <button type="button" onClick={operator}> 8 </button>
        <button type="button" onClick={operator}> 9 </button>
        <button type="button" className="logic-operators" onClick={operator}> x </button>
        <button type="button" onClick={operator}> 4 </button>
        <button type="button" onClick={operator}> 5 </button>
        <button type="button" onClick={operator}> 6 </button>
        <button type="button" className="logic-operators" onClick={operator}> - </button>
        <button type="button" onClick={operator}> 1 </button>
        <button type="button" onClick={operator}> 2 </button>
        <button type="button" onClick={operator}> 3 </button>
        <button type="button" className="logic-operators" onClick={operator}> + </button>
        <button type="button" id="zero" onClick={operator}> 0 </button>
        <button type="button" onClick={operator}> . </button>
        <button type="button" className="logic-operators" onClick={operator}> = </button>
      </div>
    </div>

  );
};

export default Calculator;
