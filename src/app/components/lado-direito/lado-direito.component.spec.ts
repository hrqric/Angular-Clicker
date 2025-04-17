import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadoDireitoComponent } from './lado-direito.component';

describe('LadoDireitoComponent', () => {
  let component: LadoDireitoComponent;
  let fixture: ComponentFixture<LadoDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadoDireitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadoDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
