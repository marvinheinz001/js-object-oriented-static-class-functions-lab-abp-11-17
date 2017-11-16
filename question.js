'use strict';

class Question{
  constructor(questionNumb, questionText){
    
    this.questionNumb = questionNumb
    this.questionText = questionText
    this.save()
  }
  save(){
    this.constructor._All.push(this)
  }
  static All(){
    return this._All;
  }
}

Question._All = []

let first = new Question(1, 'test question')
