import { TestBed, inject } from '@angular/core/testing';

import { CatFoodService } from './cat-food.service';

describe('CatFoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatFoodService]
    });
  });

  it('should be created', inject([CatFoodService], (service: CatFoodService) => {
    expect(service).toBeTruthy();
  }));
});
