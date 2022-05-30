import {createSlice} from '@reduxjs/toolkit';

const initialState = {questions: [{}], correctAnswers:0, activeStep:'step1' };

const questionSlice = createSlice({
  name: 'questionSlice',
  initialState,
  reducers: {
    save:(state, action) => {state.questions = action.payload; console.log("questions saved with questions : " + JSON.stringify(action.payload))},
    increment:(state) => {state.correctAnswers++},
    changeActiveStep: (state, action) => {state.activeStep = action.payload; console.log("new step : " + action.payload)}
  }
})

export let {save, increment, changeActiveStep} = questionSlice.actions;
export default questionSlice.reducer;