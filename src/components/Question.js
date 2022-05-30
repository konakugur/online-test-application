import React, { useState, Component } from 'react';
import tick from '../resources/green-tick.png'
import cross from '../resources/red-cross.png'
import {increment} from '../redux/QuestionReducer';
import {useDispatch, connect} from 'react-redux'


class Question extends Component {

  state = {
    userAnswer: ''
  }

  handleDispatch = ()=>{
    this.props.increment();
  }
  

  handleClick = (e) => {
    //e.preventDefault();
    this.setState({
      userAnswer: e.target.id
    })
  }

  render() {

    //const dispatch = useDispatch();

    if (this.props.isSubmitted && (this.state.userAnswer === this.props.question.correctAnswer)) {
      console.log("this is a correct answer for : " + this.props.question.id)
      this.handleDispatch();
    }

    return(
      <div style={{display: 'flex'}} >
        <div className="question ml-sm-5 pl-sm-5 pt-2">
          <div className="py-2 h5"><b style={{display: 'flex'}} >{this.props.question.questionBody}</b></div>
            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
              <label className="options">{this.props.question.answerA}
                  <input disabled={this.props.isSubmitted} checked={this.state.userAnswer === 'answerA'} id={'answerA'} onChange={(e)=>{this.handleClick(e)}} type="radio" name={this.props.question.id + 'answerA'}/>
                  <span className="checkmark"></span>
              </label>
              <label className="options">{this.props.question.answerB}
                  <input disabled={this.props.isSubmitted} checked={this.state.userAnswer === 'answerB'} id={'answerB'} onChange={(e)=>{this.handleClick(e)}} type="radio" name={this.props.question.id + 'answerB'}/>
                  <span className="checkmark"></span>
              </label>
              <label className="options">{this.props.question.answerC}
                  <input disabled={this.props.isSubmitted} checked={this.state.userAnswer === 'answerC'} id={'answerC'} onChange={(e)=>{this.handleClick(e)}} type="radio" name={this.props.question.id + 'answerC'}/>
                  <span className="checkmark"></span>
              </label>
              <label className="options">{this.props.question.answerD}
                  <input disabled={this.props.isSubmitted} checked={this.state.userAnswer === 'answerD'} id={'answerD'} onChange={(e)=>{this.handleClick(e)}} type="radio" name={this.props.question.id + 'answerD'}/>
                  <span className="checkmark"></span>
              </label>
            </div>
        </div>
        <img hidden={!this.props.isSubmitted} src={this.state.userAnswer === this.props.question.correctAnswer ? tick : cross} height='100' width='100' />
      </div>
    )
  }
}

export default connect(null, {increment})(Question)