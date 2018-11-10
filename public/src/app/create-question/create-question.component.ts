import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateQuestionService } from '../../shared/services/create-question.service'; 
import swal from 'sweetalert';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  questionFormWithoutFill: FormGroup;
 // questionFormWithFill: FormGroup;
 // questionFormOnlyOne: FormGroup;
 // questionFormMultiple: FormGroup;
  type: string = '';


  constructor(private questionService: CreateQuestionService) { }

  ngOnInit() {
    this.initCreateQuestionFormWithoutFill();

   // this.initCreateQuestionMultipleForm();
   // this.initCreateQuestionOnlyOneForm();
   // this.initCreateQuestionWithFillForm();

  }

  initCreateQuestionFormWithoutFill() {
    this.questionFormWithoutFill = new FormGroup({

      content: new FormControl(null),
      type: new FormControl(this.type),
      fillInAnswer: new FormControl(null),
      optionOne: new FormControl(null),
      optionTwo: new FormControl(null),
      optionThree: new FormControl(null),
      optionFour: new FormControl(null),
      correctAnswers: new FormControl(null)

    });
  }

  initCreateQuestionWithFillForm() {
    this.questionFormWithoutFill = new FormGroup({

      content: new FormControl(null, Validators.required),
      type: new FormControl(this.type, Validators.required),
      fillInAnswer: new FormControl(null, Validators.required)

    });
  }
  initCreateQuestionOnlyOneForm() {
    this.questionFormWithoutFill = new FormGroup({

      content: new FormControl(null, Validators.required),
      type: new FormControl(this.type, Validators.required),
      optionOne: new FormControl(null, Validators.required),
      optionTwo: new FormControl(null, Validators.required),
      optionThree: new FormControl(null, Validators.required),
      optionFour: new FormControl(null, Validators.required),
      correctAnswers: new FormControl(null, Validators.required)

    });
  }
  initCreateQuestionMultipleForm() {
    this.questionFormWithoutFill = new FormGroup({

      content: new FormControl(null, Validators.required),
      type: new FormControl(this.type, Validators.required),
      optionOne: new FormControl(null, Validators.required),
      optionTwo: new FormControl(null, Validators.required),
      optionThree: new FormControl(null, Validators.required),
      optionFour: new FormControl(null, Validators.required),
      correctAnswers: new FormControl(null, Validators.required)

    });
  }

  changeRadioSingle(){ 
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('Single Type');
    notFillInOptions.style.display = 'block';
    fillIn.style.display ='none';
    this.type = 'single';
    console.log('Type', this.type);
  }

  changeRadioMultiple(){
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('Multiple Type');
    notFillInOptions.style.display = 'block';
    fillIn.style.display ='none';
    this.type = 'multiple';
    console.log('Type', this.type);

  }

  changeRadioFill(){
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('Fill In the Blanks Type');
    notFillInOptions.style.display = 'none';
    fillIn.style.display ='block';
    this.type = 'fill';
    console.log('Type', this.type);
  }

  changeRadioOneOrMore(){
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('One or More Type Type');
    notFillInOptions.style.display = 'block';
    fillIn.style.display ='none';
    this.type = 'one_or_more';
    console.log('Type', this.type);
  
  }
  

  createQuestion(){

    if(this.type == 'single'){
     //this.initCreateQuestionOnlyOneForm();
     console.log('Single Form', this.questionFormWithoutFill.value);
     

     var options = new Array();
     options.push(this.questionFormWithoutFill.value.optionOne);
     options.push(this.questionFormWithoutFill.value.optionTwo);
     options.push(this.questionFormWithoutFill.value.optionThree);
     options.push(this.questionFormWithoutFill.value.optionFour);

     var answers = new Array();
    
      answers = this.questionFormWithoutFill.value.correctAnswers.split(',');
 
     
     for(var i = 0 ; i < answers.length ; i ++){
       if(answers[i] == 'a'){
         answers[i] = '0';
       }
       else if( answers[i] == 'b'){
         answers[i] = '1';
       }
       else if( answers[i] == 'c'){
        answers[i] = '2';
      }
      else if( answers[i] == 'd'){
        answers[i] = '3';
      }
     }

     const formData ={
       content: this.questionFormWithoutFill.value.content,
       type: this.type,
       options: options,
       answer: answers
     }
     
     //console.log('Form Data', formData);
     //console.log('Form Option Data', options);
     //console.log('Form Answer Data', answers);

     this.questionService.createQuestion(formData)
     .subscribe((res) => {
       console.log('New Question Created', res);
       swal('Good Job!', 'Your Question has been created!', 'success');
     }, (err)=>{
       console.log('Error while creating question', err);
       swal('Oops!', 'There\'s some techincal error '+ err, 'error');
       
     });
     this.questionFormWithoutFill.reset();
  
    }
    else if(this.type == 'multiple'){
     // this.initCreateQuestionMultipleForm();
      console.log('Multiple Form', this.questionFormWithoutFill.value);
      var options = new Array();
      options.push(this.questionFormWithoutFill.value.optionOne);
      options.push(this.questionFormWithoutFill.value.optionTwo);
      options.push(this.questionFormWithoutFill.value.optionThree);
      options.push(this.questionFormWithoutFill.value.optionFour);
 
      var answers = new Array();
      answers = this.questionFormWithoutFill.value.correctAnswers.split(',');
      for(var i = 0 ; i < answers.length ; i ++){
        if(answers[i] == 'a'){
          answers[i] = '0';
        }
        else if( answers[i] == 'b'){
          answers[i] = '1';
        }
        else if( answers[i] == 'c'){
         answers[i] = '2';
       }
       else if( answers[i] == 'd'){
         answers[i] = '3';
       }
      }
 
      const formData ={
        content: this.questionFormWithoutFill.value.content,
        type: this.type,
        options: options,
        answer: answers
      }
      
      //console.log('Form Data', formData);
      //console.log('Form Option Data', options);
      //console.log('Form Answer Data', answers);
      
      this.questionService.createQuestion(formData)
      .subscribe((res) => {
        console.log('New Question Created', res);
        swal('Good Job!', 'Your Question has been created!', 'success');
      }, (err)=>{
        console.log('Error while creating question', err);
        swal('Oops!', 'There\'s some techincal error '+ err, 'error');
        
      });
      this.questionFormWithoutFill.reset();
    }
    else if(this.type == 'fill'){
    // this.initCreateQuestionWithFillForm();
    
     console.log('Fill in the Blank Form', this.questionFormWithoutFill.value);


     var answers = new Array();
    
      answers = this.questionFormWithoutFill.value.fillInAnswer.split(',');

     const formData ={
       content: this.questionFormWithoutFill.value.content,
       type: this.type,
       options: options,
       fillIn: answers[0].toString(),
       answer: []
     }
     
     //console.log('Form Data', formData);
     //console.log('Form Option Data', options);
     //console.log('Form Answer Data', answers);

     this.questionService.createQuestion(formData)
     .subscribe((res) => {
       console.log('New Question Created', res);
       swal('Good Job!', 'Your Question has been created!', 'success');
     }, (err)=>{
       console.log('Error while creating question', err);
       swal('Oops!', 'There\'s some techincal error '+ err, 'error');
       
     });
     this.questionFormWithoutFill.reset();
     
    }
    else if(this.type == 'one_or_more'){
     // this.initCreateQuestionMultipleForm();
      console.log('One or More Form', this.questionFormWithoutFill.value);
      var options = new Array();
      options.push(this.questionFormWithoutFill.value.optionOne);
      options.push(this.questionFormWithoutFill.value.optionTwo);
      options.push(this.questionFormWithoutFill.value.optionThree);
      options.push(this.questionFormWithoutFill.value.optionFour);
 
      var answers = new Array();
      answers = this.questionFormWithoutFill.value.correctAnswers.split(',');
      for(var i = 0 ; i < answers.length ; i ++){
        if(answers[i] == 'a'){
          answers[i] = '0';
        }
        else if( answers[i] == 'b'){
          answers[i] = '1';
        }
        else if( answers[i] == 'c'){
         answers[i] = '2';
       }
       else if( answers[i] == 'd'){
         answers[i] = '3';
       }
      }
 
      const formData ={
        content: this.questionFormWithoutFill.value.content,
        type: this.type,
        options: options,
        answer: answers
      }
      
      //console.log('Form Data', formData);
      //console.log('Form Option Data', options);
      //console.log('Form Answer Data', answers);
      
      this.questionService.createQuestion(formData)
      .subscribe((res) => {
        console.log('New Question Created', res);
        swal('Good Job!', 'Your Question has been created!', 'success');
      }, (err)=>{
        console.log('Error while creating question', err);
        swal('Oops!', 'There\'s some techincal error '+ err, 'error');
        
      });
      this.questionFormWithoutFill.reset();
    }
    
  }

}
