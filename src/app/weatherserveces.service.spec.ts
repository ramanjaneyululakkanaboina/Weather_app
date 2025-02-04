import { TestBed } from '@angular/core/testing';

import { WeatherservecesService } from './weatherserveces.service';

describe('WeatherservecesService', () => {
  let service: WeatherservecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherservecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
