'use strict';

class Question{
  constructor(questionNumb, content){

    this.questionNumb = questionNumb
    this.content = content
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
