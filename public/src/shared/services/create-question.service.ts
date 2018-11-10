import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CreateQuestionService {

 // BASE_API_URL = environment.BASE_API_URL;

  constructor(private _http: HttpClient) { }

  createQuestion(postData){
   return this._http.post('api/posts', postData);

  }
}
