import { TestBed, inject } from '@angular/core/testing';

import { CreateQuestionService } from './create-question.service';

describe('CreateQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateQuestionService]
    });
  });

  it('should be created', inject([CreateQuestionService], (service: CreateQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
