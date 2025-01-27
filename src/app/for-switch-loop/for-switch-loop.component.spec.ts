import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSwitchLoopComponent } from './for-switch-loop.component';

describe('ForSwitchLoopComponent', () => {
  let component: ForSwitchLoopComponent;
  let fixture: ComponentFixture<ForSwitchLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForSwitchLoopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSwitchLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
