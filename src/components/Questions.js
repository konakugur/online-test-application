import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';
import './QuestionsStyle.css'
import {changeActiveStep} from '../redux/QuestionReducer';
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";

function Questions(props) {

  const dispatch = useDispatch();
  const[isSubmitted, setIsSubmitted] = useState(false);

  if (!isSubmitted) {
    dispatch(changeActiveStep('step2'))
  }

  
  
  const questions = useSelector((state) => state.questionReducer.questions);
  const correctAnswers = useSelector((state) => state.questionReducer.correctAnswers);

  

  const handleClick = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("submit clicked.")
    dispatch(changeActiveStep('step3'));
  }

  return (
    <div className="container mt-sm-5 my-1">
      {questions.map((data) => {
        return <Question key={data.id} question={data} isSubmitted={isSubmitted} />
      } )}

        <div className="ml-auto mr-sm-5">
            <button disabled={isSubmitted} onClick={(e)=>handleClick(e)} class="btn btn-success">Submit</button>
            <p hidden={!isSubmitted} >{correctAnswers} correct answers out of {questions.length} questions. </p>
        </div>
        
        
    </div>
  );
}

export default Questions;