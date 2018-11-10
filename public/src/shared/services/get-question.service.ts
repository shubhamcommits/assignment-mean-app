import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GetQuestionService {

 // BASE_API_URL = environment.BASE_API_URL;

  constructor(private _http: HttpClient) { }

  getQuestions(){
    return this._http.get('api/posts');
  }
}
