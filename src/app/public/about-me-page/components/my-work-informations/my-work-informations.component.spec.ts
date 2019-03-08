import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkInformationsComponent } from './my-work-informations.component';

describe('MyWorkInformationsComponent', () => {
  let component: MyWorkInformationsComponent;
  let fixture: ComponentFixture<MyWorkInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
