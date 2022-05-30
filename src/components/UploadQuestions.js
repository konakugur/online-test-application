import React, { useState } from "react";
import {save, changeActiveStep} from '../redux/QuestionReducer';
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";

function UploadQuestions() {

  const dispatch = useDispatch();

  dispatch(changeActiveStep('step1'));

  let navigate = useNavigate();


  const[fileName, setFileName] = useState("");
  const[fileNameError, setFileNameError] = useState("");
  const[questions, setQuestions] = useState([]);
  
  const handleValidation = (event) => {
    let formIsValid = true;

    if (fileName == "") {
      setFileNameError("Invalid file name !")
      return false;
    }

    

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  const showFile = async (e) => {
    e.preventDefault()
    let text = "";
    const reader = new FileReader()
    reader.onload = async (e) => { 
      text = (e.target.result)
      console.log(text)
      const questionObj = JSON.parse(text);
      setQuestions(questionObj.questions);
      dispatch(save(questionObj.questions));
      
      navigate('/questions')
    };
    reader.readAsText(e.target.files[0])
    
    
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                Please upload your questions here and make sure your file format is the same as the example shown in "Questions.json".
              </div>

              <div>
                <input type="file" onChange={(e) => showFile(e)} />
              </div>

              <div className="form-group">
                After clicking upload you will see the page to show questions.
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UploadQuestions;
