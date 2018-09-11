import { TestBed, inject } from '@angular/core/testing';

import { MatDemoService } from './mat-demo.service';

describe('MatDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatDemoService]
    });
  });

  it('should be created', inject([MatDemoService], (service: MatDemoService) => {
    expect(service).toBeTruthy();
  }));
});
