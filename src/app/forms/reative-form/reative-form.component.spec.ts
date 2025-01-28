import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeFormComponent } from './reative-form.component';

describe('ReativeFormComponent', () => {
  let component: ReativeFormComponent;
  let fixture: ComponentFixture<ReativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReativeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
