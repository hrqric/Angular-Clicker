import { TestBed } from '@angular/core/testing';

import { ContadorService } from './contagem.service';

describe('ContagemService', () => {
  let service: ContadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
