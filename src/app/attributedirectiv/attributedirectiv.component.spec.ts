import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributedirectivComponent } from './attributedirectiv.component';

describe('AttributedirectivComponent', () => {
  let component: AttributedirectivComponent;
  let fixture: ComponentFixture<AttributedirectivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributedirectivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributedirectivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
