import { Component, OnInit } from '@angular/core';
import { GetQuestionService } from '../../shared/services/get-question.service'; 
import swal from 'sweetalert';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {

  questions = new Array();
  radioSingleType = 0;
  checkMultipleType = new Array();
  checkOneOrMoreType = new Array();
  textFillType = '';

  constructor(private getQuestion: GetQuestionService) {

  }

  ngOnInit() {
    this.getAllQuestions();
   
  }

  onChange(eventValue){
    console.log('Value', eventValue);
    this.radioSingleType = eventValue;
  }

  onChangeMultiple(eventValue){
    if(this.checkMultipleType.includes(eventValue)){
      var index = this.checkMultipleType.indexOf(eventValue);
      console.log('index', index);
      this.checkMultipleType.splice(index,1);
      console.log('Multiple Type Array', this.checkMultipleType.sort());
    }
    else if(!this.checkMultipleType.includes(eventValue)){
      this.checkMultipleType.push(eventValue);
      console.log('Multiple Type Array', this.checkMultipleType.sort());
    }
   
  }

  onChangeOneOrMore(eventValue){
    if(this.checkOneOrMoreType.includes(eventValue)){
      var index = this.checkOneOrMoreType.indexOf(eventValue);
      console.log('index', index);
      this.checkOneOrMoreType.splice(index,1);
      console.log('One or More Type Array', this.checkOneOrMoreType.sort());
    }
    else if(!this.checkOneOrMoreType.includes(eventValue)){
      this.checkOneOrMoreType.push(eventValue);
      console.log('One or More Type Array', this.checkOneOrMoreType.sort());
    }
   
  }

  onChangeTextFillIn(){
    console.log('Text Fill', this.textFillType);
  }

  submitAnswerSingleType(answer){
    console.log('Answer', answer);
    if(this.radioSingleType == answer[0]){
      swal('Good Job!', 'Correct Answer!', 'success');
    }
    else{
      swal('Oops!', 'Wrong Answer, Please Try again!', 'error');
    }
  }

  submitAnswerMultipleType(answer){
    console.log('Answer', answer.sort());
    var compare = JSON.stringify(this.checkMultipleType) === JSON.stringify(answer)
    if(compare == true){
      swal('Good Job!', 'Correct Answer!', 'success');
    }    
    else{
      swal('Oops!', 'Wrong Answer, Please Try again!', 'error');
    }
  }

  submitAnswerOneOrMoreType(answer){
    console.log('Answer', answer.sort());
    var compare = JSON.stringify(this.checkOneOrMoreType) === JSON.stringify(answer)
    if(compare == true){
      swal('Good Job!', 'Correct Answer!', 'success');
    }    
    else{
      swal('Oops!', 'Wrong Answer, Please Try again!', 'error');
    }
  }

  submitAnswerTextFillIn(answer){
    console.log('Answer', answer);
    if(this.textFillType.toLocaleLowerCase().toString() == answer.toLocaleLowerCase().toString()){
      swal('Good Job!', 'Correct Answer!', 'success');
    }
    else{
      swal('Oops!', 'Wrong Answer, Please Try again!', 'error');
    }
    
  }


  getAllQuestions(){
    this.getQuestion.getQuestions()
    .subscribe((res) => {
      this.questions = res['questions'];
      console.log('All Questions', this.questions);
      swal('Good Job!', 'You have got '+this.questions.length+ ' questions to answer!', 'success');
    }, (err) =>{
      swal('Oops!', 'There\'s some techincal error '+ err['message'], 'error');
      console.log('Error in fetching the questions', err);
    })
  }

}
