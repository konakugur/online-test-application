import React from 'react';
import './HeaderStyle.css'
import { useSelector } from 'react-redux';

function Header(props) {

  const activeStep = useSelector((state) => state.questionReducer.activeStep);

  return (
    <div>
      <h1>Quiz App</h1>

      <ol class="steps">
        <li class={activeStep === 'step1' ? "step is-active" : "step"} data-step="1">
          Upload Your Quiz
        </li>
        <li class={activeStep === 'step2' ? "step is-active" : "step"} data-step="2">
          Solve The Quiz
        </li>
        <li class={activeStep === 'step3' ? "step is-active" : "step"} data-step="3">
          Review Results
        </li>
      </ol>
    </div>
  );
}

export default Header;