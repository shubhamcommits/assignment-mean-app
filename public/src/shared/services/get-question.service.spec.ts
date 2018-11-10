import { TestBed, inject } from '@angular/core/testing';

import { GetQuestionService } from './get-question.service';

describe('GetQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetQuestionService]
    });
  });

  it('should be created', inject([GetQuestionService], (service: GetQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
