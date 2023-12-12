import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassHomeComponent } from './pass-home.component';

describe('PassHomeComponent', () => {
  let component: PassHomeComponent;
  let fixture: ComponentFixture<PassHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
