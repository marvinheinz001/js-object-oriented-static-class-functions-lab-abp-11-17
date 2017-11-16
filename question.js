'use strict';

class Question{
  constructor(){
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

const question = new Question("What's your favorite food?")
question.save()
