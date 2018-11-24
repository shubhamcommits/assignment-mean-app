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

  questionForm: FormGroup;
  type: string = '';
  inputOptions = [1];


  constructor(private questionService: CreateQuestionService) { }

  ngOnInit() {
    this.initCreatequestionForm();

  }

  addOptions(){
    var lastOption = this.inputOptions[this.inputOptions.length-1];
    if(this.questionForm.controls['option'+lastOption].value == null){
      swal('Oops!', 'Please Fill up the last option before adding another option', 'error');
    }

    else {
      var newLastOption = (lastOption + 1);
      this.inputOptions.push(newLastOption);
      this.questionForm.addControl('option'+ newLastOption, new FormControl(null, Validators.required));
      //console.log('New Options', this.inputOptions);
      //console.log('Form Controls', this.questionForm.controls);
    }

  }

  removeLastOption(){
    var lastOption = this.inputOptions[this.inputOptions.length-1];
    this.inputOptions.pop();
    this.questionForm.removeControl('option'+lastOption);
    // console.log('New Options', this.inputOptions);
    //console.log('Form Controls', this.questionForm.controls);
  }

  initCreatequestionForm() {
    this.questionForm = new FormGroup({

      content: new FormControl(null),
      type: new FormControl(this.type),
      fillInAnswer: new FormControl(null),
      correctAnswers: new FormControl(null),
      option1: new FormControl(null)

    });
  }


  changeRadioSingle(){ 
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('Single Type');
    notFillInOptions.style.display = 'block';
    fillIn.style.display ='none';
    this.type = 'single';
  //  console.log('Type', this.type);
  }

  changeRadioMultiple(){
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('Multiple Type');
    notFillInOptions.style.display = 'block';
    fillIn.style.display ='none';
    this.type = 'multiple';
  //  console.log('Type', this.type);

  }

  changeRadioFill(){
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('Fill In the Blanks Type');
    notFillInOptions.style.display = 'none';
    fillIn.style.display ='block';
    this.type = 'fill';
  //  console.log('Type', this.type);
  }

  changeRadioOneOrMore(){
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('One or More Type Type');
    notFillInOptions.style.display = 'block';
    fillIn.style.display ='none';
    this.type = 'one_or_more';
   // console.log('Type', this.type);
  
  }
  

  createQuestion(){

    if(this.questionForm.controls['content'].value == null || this.questionForm.controls['type'].value == null){
      swal('Oops!', 'Please Fill up all the fields', 'error');
    }

    if(this.type == 'single'){
     //this.initCreateQuestionOnlyOneForm();
     console.log('Single Form', this.questionForm.value);
    // console.log('Total Options', this.inputOptions);
     

     var options = new Array();

     for(var i = 0; i < this.inputOptions.length; i++){
      options.push(this.questionForm.value['option'+(i+1)]);
     }

     var answers = new Array();
    
      answers = this.questionForm.value.correctAnswers.split(',');
 
     
     for(var i = 0 ; i < answers.length ; i ++){
       var answerOption = parseInt(answers[i]);
       answers[i] = answerOption - 1;
     }

     const formData ={
       content: this.questionForm.value.content,
       type: this.type,
       options: options,
       answer: answers
     }
     
    // console.log('Form Data', formData);
    // console.log('Form Option Data', options);
    // console.log('Form Answer Data', answers);

    this.questionService.createQuestion(formData)
     .subscribe((res) => {
       console.log('New Question Created', res);
       swal('Good Job!', 'Your Question has been created!', 'success');
     }, (err)=>{
       console.log('Error while creating question', err);
       swal('Oops!', 'There\'s some techincal error '+ err, 'error');
       
     });
     this.questionForm.reset();
     this.inputOptions = [1];
  
    }
    else if(this.type == 'multiple'){
     // this.initCreateQuestionMultipleForm();
      console.log('Multiple Form', this.questionForm.value);
      var options = new Array();

      for(var i = 0; i < this.inputOptions.length; i++){
       options.push(this.questionForm.value['option'+(i+1)]);
      }
 
      var answers = new Array();
     
       answers = this.questionForm.value.correctAnswers.split(',');
  
      
      for(var i = 0 ; i < answers.length ; i ++){
        var answerOption = parseInt(answers[i]);
        answers[i] = answerOption - 1;
      }
 
 
      const formData ={
        content: this.questionForm.value.content,
        type: this.type,
        options: options,
        answer: answers
      }
      
     // console.log('Form Data', formData);
     // console.log('Form Option Data', options);
     //  console.log('Form Answer Data', answers);
      
      this.questionService.createQuestion(formData)
      .subscribe((res) => {
        console.log('New Question Created', res);
        swal('Good Job!', 'Your Question has been created!', 'success');
      }, (err)=>{
        console.log('Error while creating question', err);
        swal('Oops!', 'There\'s some techincal error '+ err, 'error');
        
      });
      this.questionForm.reset();
      this.inputOptions = [1];

    }
    else if(this.type == 'fill'){
    // this.initCreateQuestionWithFillForm();
    
     console.log('Fill in the Blank Form', this.questionForm.value);


     var answers = new Array();
    
      answers = this.questionForm.value.fillInAnswer.split(',');

     const formData ={
       content: this.questionForm.value.content,
       type: this.type,
       options: options,
       fillIn: answers[0].toString(),
       answer: []
     }
     
    // console.log('Form Data', formData);
    // console.log('Form Option Data', options);
    //  console.log('Form Answer Data', answers);

     this.questionService.createQuestion(formData)
     .subscribe((res) => {
       console.log('New Question Created', res);
       swal('Good Job!', 'Your Question has been created!', 'success');
     }, (err)=>{
       console.log('Error while creating question', err);
       swal('Oops!', 'There\'s some techincal error '+ err, 'error');
       
     });
     this.questionForm.reset();
     this.inputOptions = [1];
     
    }
    else if(this.type == 'one_or_more'){
     // this.initCreateQuestionMultipleForm();
      console.log('One or More Form', this.questionForm.value);
      var options = new Array();

      for(var i = 0; i < this.inputOptions.length; i++){
       options.push(this.questionForm.value['option'+(i+1)]);
      }
 
      var answers = new Array();
     
       answers = this.questionForm.value.correctAnswers.split(',');
  
      
      for(var i = 0 ; i < answers.length ; i ++){
        var answerOption = parseInt(answers[i]);
        answers[i] = answerOption - 1;
      }
 
 
      const formData ={
        content: this.questionForm.value.content,
        type: this.type,
        options: options,
        answer: answers
      }
      
    //  console.log('Form Data', formData);
    // console.log('Form Option Data', options);
    //  console.log('Form Answer Data', answers);
      
      this.questionService.createQuestion(formData)
      .subscribe((res) => {
        console.log('New Question Created', res);
        swal('Good Job!', 'Your Question has been created!', 'success');
      }, (err)=>{
        console.log('Error while creating question', err);
        swal('Oops!', 'There\'s some techincal error '+ err, 'error');
        
      });
      this.questionForm.reset();
      this.inputOptions = [1];
      
    }
    
  }

}
